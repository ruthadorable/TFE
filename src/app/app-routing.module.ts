import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { DeletelivreComponent } from './deletelivre/deletelivre.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageAddLivreComponent } from './page-add-livre/page-add-livre.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { PageEmpruntComponent } from './page-emprunt/page-emprunt.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { PageLivreComponent } from './page-livre/page-livre.component';
import { PageMessagerieComponent } from './page-messagerie/page-messagerie.component';
import { PageParametreComponent } from './page-parametre/page-parametre.component';
import { PageProfileComponent } from './page-profile/page-profile.component';
import { AddReservationComponent } from './page-reservation/add-reservation/add-reservation.component';
import { PageReservationComponent } from './page-reservation/page-reservation.component';
import { ProlongationEmpruntComponent } from './prolongation-emprunt/prolongation-emprunt.component';
import { UpdatelivreComponent } from './updatelivre/updatelivre.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'user', component: UserComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path:'register',component:PageInscriptionComponent},
  {path:'',component:PageDashboardComponent,
  children:[
    {path:'livres' , component: PageLivreComponent},
    {path:'addbook' , component: PageAddLivreComponent},
    {path:'updatebook' , component: UpdatelivreComponent},
    {path:'deletebook' , component: DeletelivreComponent},
    {path:'users', component: UserComponent},
    {path:'adduser', component: AddUserComponent},
    {path:'updateuser', component: UpdateUserComponent},
    {path:'deleteuser', component: DeleteUserComponent},
    {path:'profile', component: PageProfileComponent},
    {path:'messagerie', component: PageMessagerieComponent},
    {path:'emprunts', component: PageEmpruntComponent},
    {path:'ajoutemprunt', component: ProlongationEmpruntComponent},
    {path:'reservations', component: PageReservationComponent},
    {path:'addreservation', component: AddReservationComponent},
    {path:'config', component: PageParametreComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
