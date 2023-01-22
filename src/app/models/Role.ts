import { User } from "./User";

export class Role{
    
    public id:Number;
  
    public nom:string;
  
   
    public user!:User;  

    constructor(id1: Number,nom1:string)
    {
        this.id=id1;
        this.nom=nom1;
    }
}