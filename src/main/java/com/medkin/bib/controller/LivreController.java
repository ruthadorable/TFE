package com.medkin.bib.controller;

import com.medkin.bib.Exception.ResourceNotFoundException;
import com.medkin.bib.dao.AuteurDao;
import com.medkin.bib.dao.EditionDao;
import com.medkin.bib.entity.Auteur;
import com.medkin.bib.entity.Edition;
import com.medkin.bib.entity.ImageModel;
import com.medkin.bib.entity.Livre;
import com.medkin.bib.service.LivreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import java.io.IOException;
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


    @DeleteMapping("/delete/{id}")
    public Map<String,Boolean> deleteLivre(@PathVariable(value="id") long id)throws ResourceNotFoundException{

        Livre livre=livreService.findById(id).orElseThrow(()->new ResourceNotFoundException("Livre not found"));
        livreService.deleteLivre(livre);
        Map<String,Boolean> response=new HashMap<>();
        return response;
    }

}
