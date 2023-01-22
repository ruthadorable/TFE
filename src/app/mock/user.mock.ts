import { Role } from "../models/Role";
import { User } from "../models/User";

export const MOCK_USER : User[]=[
    {
        id:1,
        prenom:"Ruth Ann",
        nom: "ADORABLE",
        username:"rad",
        email: "adorableruthann@gmail.com",
        password: "5692",
        role: new Role(1,"admin"),
}, 
{
    id:2,
    prenom:"Anna",
    nom: "De Mulder",
    username:"ade",
    email: "annademulder@gmail.com",
    password: "1234",
    role: new Role(2,"utilisateur"),
},
{   id:1,
    prenom:"Eugénie",
    nom: "Molders",
    username:"emo",
    email: "eugéniemolders@gmail.com",
    password: "1234",
    role: new Role(2,"utilisateur"),

},
{   id:2,
    prenom:"Philippe",
    nom: "Wilmotte",
    username:"pwi",
    email: "philippewilmotte@gmail.com",
    password: "1234",
    role: new Role(2,"utilisateur"),  
}];