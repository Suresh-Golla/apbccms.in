import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, myRuotings } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
// import { StakeholdersComponent } from './stakeholders/stakeholders.component';
// import { TrainingSkillsComponent } from './training-skills/training-skills.component';
// import { JobMelaComponent } from './job-mela/job-mela.component';
// import { ReportsComponent } from './reports/reports.component';
// import { HelpDeskComponent } from './help-desk/help-desk.component';
// import { ContactsComponent } from './contacts/contacts.component';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
// import { AboutComponent } from './about/about.component';
// import { PagenotfountComponent } from './pagenotfount/pagenotfount.component';
// import { CandidateComponent } from './candidate/candidate.component';
// import { StudentComponent } from './student/student.component';
// import { CompanyComponent } from './company/company.component';
// import { InstituteComponent } from './institute/institute.component';
// import { FederationComponent } from './federation/federation.component';
// import { AaradhanaComponent } from './aaradhana/aaradhana.component';
// import { LatestNewsComponent } from './latest-news/latest-news.component';
// import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentupdateComponent } from './studentupdate/studentupdate.component';
import { CourseupdateComponent } from './courseupdate/courseupdate.component';
import { FederationupdateComponent } from './federationupdate/federationupdate.component';
import { AaradhanaupdateComponent } from './aaradhanaupdate/aaradhanaupdate.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { DisplaypageComponent } from './displaypage/displaypage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    // StakeholdersComponent,
    // TrainingSkillsComponent,
    // JobMelaComponent,
    // ReportsComponent,
    // HelpDeskComponent,
    // ContactsComponent,
    // LoginComponent,
    // SignupComponent,
    // AboutComponent,
    // PagenotfountComponent,
    // CandidateComponent,
    // StudentComponent,
    // CompanyComponent,
    // InstituteComponent,
    // FederationComponent,
    // AaradhanaComponent,
    // LatestNewsComponent,
    // ProfileInfoComponent
    myRuotings,
    StudentupdateComponent,
    CourseupdateComponent,
    FederationupdateComponent,
    AaradhanaupdateComponent,
    ProfileupdateComponent,
    DisplaypageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
