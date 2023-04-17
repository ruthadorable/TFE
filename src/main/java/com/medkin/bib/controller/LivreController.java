package com.medkin.bib.controller;

import com.medkin.bib.Exception.ResourceNotFoundException;
import com.medkin.bib.dao.AuteurDao;
import com.medkin.bib.dao.EditionDao;
import com.medkin.bib.entity.*;
import com.medkin.bib.service.LivreService;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/livre")
public class LivreController {

    @Autowired
    LivreService livreService;
    @Autowired
    EditionDao editionDao;

    @Autowired
    AuteurDao auteurDao;

    @PostConstruct
    public void initLivres()
    {
        livreService.initLivres();
    }


    @GetMapping("/all")
    public Iterable<Livre> getLivres()
    {
        return this.livreService.getAll();
    }


    @PostMapping(value={"/add"},consumes={MediaType.MULTIPART_FORM_DATA_VALUE})
    public Livre addNewLivre(@RequestPart("livre") Livre livre, @RequestPart("imageFile")MultipartFile file){
      try{
        Set<ImageModel> images=uploadImage(file); livre.setLivreImages(images);return livreService.addNewLivre(livre);
    }catch(Exception e){
            System.out.println(e.getMessage());return null;
        }

    }
    public Set<ImageModel> uploadImage(MultipartFile file) throws IOException {
        Set<ImageModel> imageModels=new HashSet<>();

            ImageModel imageModel=new ImageModel(
            null,
            file.getOriginalFilename(),
            file.getContentType(),
            file.getBytes());

            imageModels.add(imageModel);

        return imageModels;
    }


    @PutMapping(value={"/update/{id}"},consumes={MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<Livre> updateLivre(@PathVariable(value="id")Long id, @RequestPart("livre") Livre livre, @RequestPart("imageFile")MultipartFile file) {


        Livre book=livreService.findById(id).get();
        book.setTitre(livre.getTitre());
        book.setResume(livre.getResume());


        List<Auteur> listAuteur=new ArrayList<>();
        for(Auteur aut: livre.getAuteurs())
        {
            listAuteur.add(aut);
            Optional<Auteur> present= auteurDao.findById(aut.getNom());
            if(!present.isPresent())
            {auteurDao.save(aut);}
        }

        book.setAuteurs(listAuteur);
        List<Edition> editionList= new ArrayList<>();
        for(Edition edition: livre.getEdition())
        {
            editionList.add(edition);
            Optional<Edition> present= editionDao.findById(edition.getId());
            if(!present.isPresent())
            {editionDao.save(edition);}
        }
        book.setEdition(editionList);

        book.setPrixLitteraires(livre.getPrixLitteraires());
        book.setMotCle(livre.getMotCle());

        try{
            Set<ImageModel> images=uploadImage(file);
            book.setLivreImages(images);
        }catch(Exception e){
            System.out.println(e.getMessage());
            return null;
        }
        final Livre updatedLivre=livreService.updateLivre(book);
        ResponseEntity<Livre> ok = ResponseEntity.ok(updatedLivre);
        return ok;
    }
    @PostMapping("/import-excel")
    public ResponseEntity<String> uploadExcelFile(MultipartFile file) {
        try {
            XSSFWorkbook workbook = new XSSFWorkbook(file.getInputStream());
            XSSFSheet worksheet = workbook.getSheetAt(0);
            for (int i = 1; i < worksheet.getPhysicalNumberOfRows(); i++) {
                Row row = worksheet.getRow(i);
                Livre excelData = new Livre();
                Edition edition= new Edition();
                for (int j = 0; j < row.getLastCellNum(); j++) {
                    Cell cell = row.getCell(j);
                    if (j == 1) {
                        excelData.setTitre(cell.getStringCellValue());
                    } else if (j == 2) {
                        excelData.setResume(cell.getStringCellValue());
                    } else if (j == 3) {
                        String auteurs[]= cell.getStringCellValue().split("[,]",0 );
                        List <Auteur> auteurList=new ArrayList<Auteur>();
                        for(String name: auteurs)
                        { Auteur auteur = new Auteur();
                            auteur.setNom(name.split("[ ]",0)[0]);
                            auteur.setPrenom(name.split("[ ]",0)[1]);
                            auteurList.add(auteur);
                        }
                        excelData.setAuteurs( auteurList);
                    }
                    else if (j == 4) {
                        Editeur editeur= new Editeur();
                        editeur.setNomEditeur(cell.getStringCellValue());
                        edition.setEditeur(editeur);

                    }
                    else if (j == 5) {
                        edition.setNom(cell.getStringCellValue());

                    }
                    else if (j == 6){
                        String date = cell.getStringCellValue();
                        DateTimeFormatter dt = DateTimeFormatter.ofPattern( "uuuu-MM-dd");
                        System.out.println("<" + LocalDate.parse(date).format(dt) + ">");
                        edition.setDateParution(LocalDate.parse(date));

                    }
                    else if (j == 7 ){
                        String langue=cell.getStringCellValue();
                        edition.setLangue(langue);
                    }
                    else if (j == 8 ){
                        int isbn= (int) cell.getNumericCellValue();
                        edition.setIsbn(isbn);
                    }
                    else if (j == 9 ){
                        String nomCategorie=cell.getStringCellValue();
                        Categorie categorie=new Categorie();
                        categorie.setNomCategorie(nomCategorie);
                        Set <Livre> livreSet=new HashSet<>();
                        livreSet.add(excelData);
                        categorie.setLivres(livreSet);
                        excelData.setCategorie(categorie);
                    }
                    List<Edition>editions=new ArrayList<>();
                    editions.add(edition);
                    excelData.setEdition(editions);
                }
                livreService.addNewLivre(excelData); // save data to database
            }
            return new ResponseEntity<>("Excel data imported successfully", HttpStatus.OK);
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>("Failed to import Excel data", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @DeleteMapping("/delete/{id}")
    public Map<String,Boolean> deleteLivre(@PathVariable(value="id") long id)throws ResourceNotFoundException{

        Livre livre=livreService.findById(id).orElseThrow(()->new ResourceNotFoundException("Livre not found"));
        livreService.deleteLivre(livre);
        Map<String,Boolean> response=new HashMap<>();
        return response;
    }

}
