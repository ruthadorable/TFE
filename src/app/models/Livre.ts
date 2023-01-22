import { EmitAndSemanticDiagnosticsBuilderProgram } from "typescript";
import { Auteur } from "./Auteur";
import { Categorie } from "./Categorie";
import { Editeur } from "./Editeur";
import { Edition } from "./Edition";
import { Exemplaire } from "./Exemplaire";
import { FileHandle } from "./FileHandle";
import { Motcle } from "./MotCle";
import {PrixLitteraire} from "./PrixLitteraire";
export class Livre{
    public  livre_id!:Number;

    public titre!:String;

    public resume!:String;
    
    public  isbn!:Number;
   
    public categorie_nom!:Categorie["nomCategorie"];
   
    public  motcle_id!:Motcle["id"];

    public auteurs:Auteur[]=[new Auteur(),new Auteur()];

    public prixLiterraire!:PrixLitteraire;

    public  exemplaires !:Exemplaire[];

    public edition: Edition[]=[new Edition()];

    public livreImages:FileHandle[]=[new FileHandle()];

    
}