import { Exemplaire } from "./Exemplaire";
import { User } from "./User";

export class Emprunt{

    public  id!:Number;

    public dateEmprunt!:Date ;

    public dateRetour!:Date ;

    public prixAmende:Number = 0.20;

    public joursEmprunt:Number=21;

    public  cptProlongation:Number = 3;

    public utilisateur!:User[] ;

    public exemplaires!:Exemplaire[];

    public  joursRetard :Number = 0;

    public  totalAmende:Number=0 ;


}