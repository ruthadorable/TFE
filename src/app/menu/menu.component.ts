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
    url: 'admin/profile',
    sousMenu:[
      {
        id:'11',
        titre: 'Profile',
        icon: '',
        url:'admin/profile'
      }
      ]
    },
  {
    id: '2',
    titre: 'Livres',
    icon: 'fa-solid fa-books',
    url: 'admin/livres',
    sousMenu:[
      {
        id:'21',
        titre: 'Vue d\'ensemble',
        icon: '',
        url:'admin/livres'
      },
      {
        id: '22',
        titre: 'Ajouter un livre',
        icon:'',
        url:'admin/addbook'
      },
      {
        id: '23',
        titre: 'Modifier un livre',
        icon:'',
        url:'admin/updatebook'
      },
      {
        id: '24',
        titre: 'Supprimer un livre',
        icon:'',
        url:'admin/deletebook'
      },
    ]
  },
  {
    id: '3',
    titre: 'Emprunts',
    icon: '',
    url: 'admin/emprunts',
    sousMenu:[
      {
        id:'31',
        titre: 'Vue d\'ensemble',
        icon: '',
        url:'admin/emprunts'
      },
      {
        id: '22',
        titre: 'Prolonger un emprunt',
        icon:'',
        url:'admin/ajoutemprunt'
      },
    ]
  },
  {
    id: '4',
    titre: 'Reservations',
    icon: '',
    url: 'admin/reservations',
    sousMenu:[
      {
        id:'41',
        titre: 'Vue d\'ensemble',
        icon: '',
        url:'admin/reservations'
      },
      {
        id: '42',
        titre: 'Ajouter une réservation',
        icon:'',
        url:'admin/addreservation'
      },
      
    ]
  },
  {
    id: '4',
    titre: 'Utilisateurs',
    icon: '',
    url: 'admin/users',
    sousMenu:[
      {
        id:'21',
        titre: 'Vue d\'ensemble',
        icon: '',
        url:'admin/users'
      },
      {
        id: '22',
        titre: 'Ajouter un utilisateur',
        icon:'',
        url:'admin/adduser'
      },
      {
        id: '23',
        titre: 'Modifier un utilisateur',
        icon:'',
        url:'admin/updateuser'
      },
      {
        id: '24',
        titre: 'Supprimer un utilisateur',
        icon:'',
        url:'admin/deleteuser'
      },
    ]
  },
  {
    id: '5',
    titre: 'Messagerie',
    icon: '',
    url: 'admin/messagerie',
    sousMenu:[
      {
        id:'21',
        titre: 'Boîte email',
        icon: '',
        url:'admin/messagerie'
      },
      {
        id: '22',
        titre: 'Envoyer un message',
        icon:'',
        url:'admin/newmessage'
      }
    ]
  },
  {
    id: '6',
    titre: 'Parametrage',
    icon: '',
    url: 'admin/config',
    sousMenu:[
      {
        id:'21',
        titre: 'Vue d\'ensemble',
        icon: '',
        url:'admin/config'
      },
      {
        id: '22',
        titre: 'Modifier la monnaie',
        icon:'',
        url:'admin/updatecurrency'
      },
      {
        id: '23',
        titre: 'Modifier la langue',
        icon:'',
        url:'admin/updatelang'
      },
      {
        id: '24',
        titre: 'Modifier la durée de prêt',
        icon:'',
        url:'admin/updateduration'
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
