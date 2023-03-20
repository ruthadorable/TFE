import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule } from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PageLivreComponent } from './page-livre/page-livre.component';
import { PageProfileComponent } from './page-profile/page-profile.component';
import { PageReservationComponent } from './page-reservation/page-reservation.component';
import { PageMessagerieComponent } from './page-messagerie/page-messagerie.component';
import { PageParametreComponent } from './page-parametre/page-parametre.component';
import { DetailLivreComponent } from './detail-livre/detail-livre.component';
import { PageEmpruntComponent } from './page-emprunt/page-emprunt.component';
import { ProlongationEmpruntComponent } from './prolongation-emprunt/prolongation-emprunt.component';
import { UpdatelivreComponent } from './updatelivre/updatelivre.component';
import { DeletelivreComponent } from './deletelivre/deletelivre.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { AddReservationComponent } from './page-reservation/add-reservation/add-reservation.component';
import { UserService } from './service/user.service';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageAddLivreComponent } from './page-add-livre/page-add-livre.component';
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { DragDirective } from './drag.directive';
import {MatTableModule} from '@angular/material/table';
import { ShowBookImageDialogComponent } from './show-book-image-dialog/show-book-image-dialog.component';
import { UpdateBookDialogComponent } from './update-book-dialog/update-book-dialog.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTreeModule} from '@angular/material/tree';
import { ReservationComponent } from './reservation/reservation.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    MenuComponent,
    AdminComponent,
    UserComponent,
    ForbiddenComponent,
    PageLivreComponent,
    PageProfileComponent,
    PageReservationComponent,
    PageMessagerieComponent,
    PageParametreComponent,
    DetailLivreComponent,
    PageEmpruntComponent,
    ProlongationEmpruntComponent,
    UpdatelivreComponent,
    DeletelivreComponent,
    AddUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    AddReservationComponent,
    DashboardComponent,
    PageAddLivreComponent,
    DragDirective,
    ShowBookImageDialogComponent,
    UpdateBookDialogComponent,
    ReservationComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    MatSnackBarModule,
    MatStepperModule,
    MatSliderModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTreeModule,
    Ng2SearchPipeModule
  ],
  providers: [UserService,MatDatepicker],
  bootstrap: [AppComponent]
})
export class AppModule { }
