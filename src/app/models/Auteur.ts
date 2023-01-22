import { stringify } from "@angular/compiler/src/util"


export class Auteur{
    
    public id!:number;
    public nom!:string;
    public prenom!:string;
    public constructor(...args:[])
    {
        this.nom="";
        this.prenom="";
    }

}