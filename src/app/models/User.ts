
    import {Role} from './Role';
    export class User{

    public id:Number;
    public prenom:string;
    public nom:string;
    public username:string;
    public email:string;
    public password:string;
    public role!:Role;
    public constructor()
    {
        this.id=0;
        this.prenom="";
        this.nom="";
        this.username="";
        this.email="";
        this.password="";
        
    }
}