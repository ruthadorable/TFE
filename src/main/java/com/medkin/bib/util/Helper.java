package com.medkin.bib.util;

import com.medkin.bib.entity.Auteur;
import com.medkin.bib.entity.Edition;
import com.medkin.bib.entity.Livre;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

public class Helper {

    public List<Livre>  convertExcelToListOfProduct(InputStream is){
        List<Livre> list = new ArrayList<>();
        try{
            XSSFWorkbook workbook = new XSSFWorkbook(is);
            XSSFSheet sheet = workbook.getSheet("data");
            int rowNumber=0;
            Iterator<Row> iterator= sheet.iterator();
            while(iterator.hasNext()){
                Row row=iterator.next();
                if(rowNumber==0)
                {
                    rowNumber++;
                    continue;
                }
                Iterator<Cell> cells=row.iterator();
                int cid=0;
                Livre l=new Livre();
                while(cells.hasNext())
                {
                    Cell cell= cells.next();
                    switch(cid){
                        case 0:
                            l.setTitre(cell.getStringCellValue());
                            break;
                        case 1:
                            l.setResume(cell.getStringCellValue());
                            break;
                        case 2:

                            String[] auteurs = cell.getStringCellValue().split(String.valueOf(','));
                            List <Auteur> auteurList= new ArrayList<>();
                            for(String s: auteurs)
                            {
                                Auteur auteur=new Auteur();
                                auteur.setNom(Arrays.stream(s.split(' ')).findFirst());
                                auteur.setPrenom(Arrays.stream(s.split(' ').get(1)));
                                auteurList.add(auteur);
                            }
                            l.setAuteurs(auteurList);

                            break;
                        case 3:
                            String[] editions = cell.getStringCellValue().split(String.valueOf(','));
                            List <Auteur> editionList= new ArrayList<>();
                            for(String s: editions)
                            {
                                Edition edition=new Auteur();
                                edition.setNom();
                                edition.setEditeur();
                                edition.setIsbn();
                                edition.setDateParution();
                                editionList.add(edition);
                            }
                            l.setAuteurs(auteurList);

                            l.setEdition( cell.getStringCellValue());
                            break;
                        case 4:
                            l.setTitre(cell.getStringCellValue());
                            break;
                        default:
                            throw new IllegalStateException("Unexpected value: " + cid);
                    }
                }
            }

        }catch(Exception e){

        }
    }
}
