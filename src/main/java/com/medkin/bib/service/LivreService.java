package com.medkin.bib.service;

import com.medkin.bib.dao.*;
import com.medkin.bib.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@Service
public class LivreService {

    @Autowired
    LivreDao livreDao;

    @Autowired
    AuteurDao auteurDao;

    @Autowired
    EditionDao editionDao;
    @Autowired
    MotCleDao motCleDao;

    @Autowired
    ExemplaireDao exemplaireDao;
    @Autowired
    CategorieDao categorieDao;

    @Autowired
    EditeurDao editeurDao;
    @Autowired
    EtatDao etatDao;

    public void initLivres()
    {
        Livre livre1=new Livre();
        livre1.setTitre("Gray's Atlas d'anatomie humaine'");
        livre1.setResume("Le Gray's Atlas d'anatomie humaine avec son ebook ses vidéos et QCM est le complément idéal du très populaire manuel de cours Gray's Anatomie pour les étudiants. ");
        Editeur elsevier=new Editeur("ELSEVIER MASSON","65 Rue Camille Desmoulins, 92130 Issy-les-Moulineaux, France");
        editeurDao.save(elsevier);
        LocalDate date1=LocalDate.of(2017,7,5);
        Etat dispo=new Etat("Disponible");
        etatDao.save(dispo);
        Etat reserve=new Etat("Reservé");
        etatDao.save(reserve);
        Etat emprunte=new Etat("Emprunté");
        etatDao.save(emprunte);
        Exemplaire explr1=new Exemplaire(978229474,new Etat("Disponble"));
        exemplaireDao.save(explr1);
        Set<Exemplaire> exemplaireSet=new HashSet<>();
        exemplaireSet.add(explr1);
        //Edition
        Edition elsevier2eme=new Edition(1,"2eme edition ",978229474,"Français",date1,elsevier,exemplaireSet);
        editionDao.save(elsevier2eme);
        List<Edition> editionList= new ArrayList<>();
        editionList.add((Edition) elsevier2eme);
        livre1.setEdition(editionList);
        //Auteurs
        Auteur auteur1l1=new Auteur("Drake","Richard L.");
        auteurDao.save(auteur1l1);
        Auteur auteur2l1=new Auteur("Vogl","A.Wayne");
        auteurDao.save(auteur2l1);
        List<Auteur> listAuteurl1=new ArrayList<>();
        listAuteurl1.add(auteur1l1);
        listAuteurl1.add(auteur2l1);
        livre1.setAuteurs(listAuteurl1);
        //Motcle
        MotCle anat=new MotCle("ANATGRAY978");
        livre1.setId(1L);
        livre1.setMotCle(anat);
        Set<Livre> livreSet=new HashSet<>();
        livreSet.add(livre1);
        livreDao.save(livre1);
        Categorie anatomie=new Categorie("Anatomie",livreSet);
        categorieDao.save(anatomie);


        Livre livre2=new Livre();
        livre2.setId(2L);
        livre2.setTitre("Chimie organique 1 -Tome 1");
        livre2.setResume("Cet ensemble de deux ouvrages, tout en couleur, constitue un cours très complet sur la chimie organique. ");
        Editeur dunod= new Editeur("Dunod","11 rue Paul Bert, Adresse en 2016, 92247, Malakoff cedex. 5 rue Laromiguière, Ancienne adresse, 75005, Paris.");
        editeurDao.save(dunod);
        LocalDate date2=LocalDate.of(2008,7,5);
        Exemplaire explr2=new Exemplaire(978229554,dispo);
        exemplaireDao.save(explr2);
        Set<Exemplaire> exemplaireSet2=new HashSet<>();
        exemplaireSet2.add(explr2);
        Edition dunod12eme=new Edition(2,"12eme edition ",978229554,"Français",date2,dunod,exemplaireSet2);
        editionDao.save(dunod12eme);
        List<Edition> editionList2= new ArrayList<>();
        editionList2.add((Edition) dunod12eme);
        livre2.setEdition(editionList2);
        Auteur auteur1l2=new Auteur("Hart","Harold");
        auteurDao.save(auteur1l2);
        Auteur auteur2l2=new Auteur("Craine","L.");
        auteurDao.save(auteur2l2);
        List<Auteur> listAuteurl2=new ArrayList<>();
        listAuteurl2.add(auteur1l2);
        listAuteurl2.add(auteur2l2);
        livre2.setAuteurs(listAuteurl2);
        MotCle chim=new MotCle("CHIMORG978");
        motCleDao.save(chim);
        livre2.setMotCle(chim);
        Set<Livre> livreSet2=new HashSet<>();
        livreSet2.add(livre2);
        livreDao.save(livre2);
        Categorie chimie=new Categorie("Chimie Organique",livreSet2);
        categorieDao.save(chimie);



        Livre livre3=new Livre();
        livre3.setId(3L);
        livre3.setTitre("Physique - Kane Cours , QCM et exercices corrigés");
        livre3.setResume("Ce cours de physique est la référence incontournable de tous les étudiants en Sciences de la Vie. Il couvre en effet tous les domaines de la physique classique et moderne enseignés dans les filières biologiques et médicales : lois générales du mouvement");
        LocalDate date3=LocalDate.of(2004,8,15);
        Exemplaire explr3=new Exemplaire(978210000,dispo);
        Exemplaire explr4=new Exemplaire(978210004,emprunte);
        exemplaireDao.save(explr3);
        Set<Exemplaire> exemplaireSet3=new HashSet<>();
        exemplaireSet3.add(explr3);
        exemplaireSet3.add(explr4);
        Edition dunod3eme=new Edition(3,"3eme edition ",978210007,"Français",date3,dunod,exemplaireSet3);
        editionDao.save(dunod3eme);
        List<Edition> editionList3= new ArrayList<>();
        editionList3.add((Edition) dunod3eme);
        livre3.setEdition(editionList3);
        Auteur auteur1l3=new Auteur("KANE","Joseph");
        auteurDao.save(auteur1l3);
        List<Auteur> listAuteurl3=new ArrayList<>();
        listAuteurl3.add(auteur1l3);
        livre3.setAuteurs(listAuteurl3);
        MotCle phys=new MotCle("PHYKANE978");
        motCleDao.save(phys);
        livre3.setMotCle(phys);
        Set<Livre> livreSet3=new HashSet<>();
        livreSet3.add(livre3);
        livreDao.save(livre3);
        Categorie physique=new Categorie("PHYSIQUE",livreSet3);
        categorieDao.save(physique);



    }

    public Iterable<Livre>getAll() {
       return this.livreDao.findAll();
    }

    public Optional<Livre> findById(Long id)
    {
        return this.livreDao.findById(id);
    }

    public Optional<Livre> findByAutor(String nom)
    {
        Optional<Livre> lelivre =Optional.empty();
        List<Livre> all=this.livreDao.findAll();
        for(Livre livre: all)
        {
            for(   Auteur auteur: livre.getAuteurs())
            {
                if(auteur.getPrenom()==nom || auteur.getNom()==nom)
                {
                    lelivre=Optional.of(livre);
                    break;
                }
            }
        }
        return lelivre;
    }
    public Livre addNewLivre(Livre livre)
    {
        Optional<Exemplaire>isPresent= exemplaireDao.findById(livre.getEdition().get(0).getIsbn());
        if(!isPresent.isPresent()){
            Exemplaire exemplaire=new Exemplaire(livre.getEdition().get(0).getIsbn(),new Etat("Disponible"));
            exemplaireDao.save(exemplaire);
        }

        return livreDao.save(livre);
    }
    public Livre updateLivre(Livre livre)
    {
        return livreDao.save(livre);
    }

    public void deleteLivre(Livre livre){

        exemplaireDao.deleteById(livre.getEdition().get(0).getIsbn());

        livreDao.delete(livre);

    }




}
