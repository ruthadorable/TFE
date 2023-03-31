
    import {Role} from './Role';
    export class User{

    public id:Number;
    public prenom:string;
    public nom:string;
    public username:string;
    public email:string;
    public password:string;
    public role!:Role;

    public constructor( prenom:string,
    nom:string,
    username:string,
    email:string,
password:string)
    {
        
        this.prenom=prenom;
        this.nom=nom;
        this.username=username;
        this.email=email;
        this.password=password;
        
    }
}