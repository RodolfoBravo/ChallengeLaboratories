import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { Genders } from './utils/fuction.challenge';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { PatientService } from './services/patient-service/patient.service';
import { PatientTablesComponent } from './components/patient-tables/patient-tables.component';

@NgModule({
  declarations: [AppComponent, PatientFormComponent, PatientTablesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
