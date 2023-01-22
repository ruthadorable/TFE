import { Editeur } from "./Editeur";

export class Edition{
    public id!:Number;
    public isbn!:Number;
    public nom!:string;
    public langue!:string;
    public dateParution!:Date;
    public editeur!:Editeur;
}