import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { DeletelivreComponent } from './deletelivre/deletelivre.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HasRoleGuard } from './has-role.guard';
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
  {path: '', component: HomeComponent},
  {path: 'user', component: UserComponent ,canActivate :[HasRoleGuard], data : {role : 'User' }},
  {path: 'forbidden', component: ForbiddenComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path:'register',component:PageInscriptionComponent},
  {path:'admin',component:PageDashboardComponent,canActivate :[HasRoleGuard], data : {role : 'Admin' },
   children: [
    {path:'livres' , component: PageLivreComponent,canActivate :[HasRoleGuard], data : {role : 'Admin' }},
    {path:'addbook' , component: PageAddLivreComponent,canActivate :[HasRoleGuard], data : {role : 'Admin' }},
    {path:'updatebook' , component: UpdatelivreComponent,canActivate :[HasRoleGuard], data : {role : 'Admin' }},
    {path:'deletebook' , component: DeletelivreComponent,canActivate :[HasRoleGuard], data : {role : 'Admin' }},
    {path:'users', component: UserComponent,canActivate :[HasRoleGuard], data : {role : 'Admin' }},
    {path:'adduser', component: AddUserComponent,canActivate :[HasRoleGuard], data : {role : 'Admin' }},
    {path:'updateuser', component: UpdateUserComponent,canActivate :[HasRoleGuard], data : {role : 'Admin' }},
    {path:'deleteuser', component: DeleteUserComponent,canActivate :[HasRoleGuard], data : {role : 'Admin' }},
    {path:'profile', component: PageProfileComponent,canActivate :[HasRoleGuard], data : {role : 'Admin' }},
    {path:'messagerie', component: PageMessagerieComponent,canActivate :[HasRoleGuard], data : {role : 'Admin' }},
    {path:'emprunts', component: PageEmpruntComponent,canActivate :[HasRoleGuard], data : {role : 'Admin' }},
    {path:'ajoutemprunt', component: ProlongationEmpruntComponent,canActivate :[HasRoleGuard], data : {role : 'Admin' }},
    {path:'reservations', component: PageReservationComponent,canActivate :[HasRoleGuard], data : {role : 'Admin' }},
    {path:'addreservation', component: AddReservationComponent,canActivate :[HasRoleGuard], data : {role : 'Admin' }},
    {path:'config', component: PageParametreComponent,canActivate :[HasRoleGuard], data : {role : 'Admin' }}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
