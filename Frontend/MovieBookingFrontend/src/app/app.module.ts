import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
import { NavbaruserComponent } from './navbaruser/navbaruser.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { UpdatemovieComponent } from './updatemovie/updatemovie.component';
import { UserbookingComponent } from './userbooking/userbooking.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import {SecurityService} from './Services/security.service';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RegistrationComponent,
    UserHomepageComponent,
    AdminHomepageComponent,
    NavbarComponent,
    NavbaradminComponent,
    NavbaruserComponent,
    AddmovieComponent,
    UpdatemovieComponent,
    UserbookingComponent,
    ForgetPassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDividerModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [SecurityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
