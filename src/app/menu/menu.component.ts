import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Menu from './menu';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menuProperties: Array<Menu> = [{
    id: '1',
    titre: 'Tableau de bord',
    icon: '',
    url: 'profile',
    sousMenu:[
      {
        id:'11',
        titre: 'Profile',
        icon: '',
        url:''
      }
      ]
    },
  {
    id: '2',
    titre: 'Livres',
    icon: 'fa-solid fa-books',
    url: 'livres',
    sousMenu:[
      {
        id:'21',
        titre: 'Vue d\'ensemble',
        icon: '',
        url:'livres'
      },
      {
        id: '22',
        titre: 'Ajouter un livre',
        icon:'',
        url:'addbook'
      },
      {
        id: '23',
        titre: 'Modifier un livre',
        icon:'',
        url:'updatebook'
      },
      {
        id: '24',
        titre: 'Supprimer un livre',
        icon:'',
        url:'deletebook'
      },
    ]
  },
  {
    id: '3',
    titre: 'Emprunts',
    icon: '',
    url: 'emprunts',
    sousMenu:[
      {
        id:'31',
        titre: 'Vue d\'ensemble',
        icon: '',
        url:'emprunts'
      },
      {
        id: '22',
        titre: 'Prolonger un emprunt',
        icon:'',
        url:'ajoutemprunt'
      },
    ]
  },
  {
    id: '4',
    titre: 'Reservations',
    icon: '',
    url: 'reservations',
    sousMenu:[
      {
        id:'41',
        titre: 'Vue d\'ensemble',
        icon: '',
        url:'reservations'
      },
      {
        id: '42',
        titre: 'Ajouter une réservation',
        icon:'',
        url:'addreservation'
      },
      
    ]
  },
  {
    id: '4',
    titre: 'Utilisateurs',
    icon: '',
    url: 'users',
    sousMenu:[
      {
        id:'21',
        titre: 'Vue d\'ensemble',
        icon: '',
        url:'users'
      },
      {
        id: '22',
        titre: 'Ajouter un utilisateur',
        icon:'',
        url:'adduser'
      },
      {
        id: '23',
        titre: 'Modifier un utilisateur',
        icon:'',
        url:'updateuser'
      },
      {
        id: '24',
        titre: 'Supprimer un utilisateur',
        icon:'',
        url:'deleteuser'
      },
    ]
  },
  {
    id: '5',
    titre: 'Messagerie',
    icon: '',
    url: 'messagerie',
    sousMenu:[
      {
        id:'21',
        titre: 'Boîte email',
        icon: '',
        url:'messagerie'
      },
      {
        id: '22',
        titre: 'Envoyer un message',
        icon:'',
        url:'newmessage'
      }
    ]
  },
  {
    id: '6',
    titre: 'Parametrage',
    icon: '',
    url: 'config',
    sousMenu:[
      {
        id:'21',
        titre: 'Vue d\'ensemble',
        icon: '',
        url:'config'
      },
      {
        id: '22',
        titre: 'Modifier la monnaie',
        icon:'',
        url:'updatecurrency'
      },
      {
        id: '23',
        titre: 'Modifier la langue',
        icon:'',
        url:'updatelang'
      },
      {
        id: '24',
        titre: 'Modifier la durée de prêt',
        icon:'',
        url:'updateduration'
      },
    ]
  }];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigate( any: any ): void{
    this.router.navigateByUrl(any);
  }

}
