import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AaradhanaComponent } from './aaradhana/aaradhana.component';
import { AaradhanaupdateComponent } from './aaradhanaupdate/aaradhanaupdate.component';
import { AboutComponent } from './about/about.component';
import { CandidateComponent } from './candidate/candidate.component';
import { CompanyComponent } from './company/company.component';
import { CompanyupdateComponent } from './companyupdate/companyupdate.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CourseupdateComponent } from './courseupdate/courseupdate.component';
import { DisplaypageComponent } from './displaypage/displaypage.component';
import { FederationComponent } from './federation/federation.component';
import { FederationupdateComponent } from './federationupdate/federationupdate.component';
import { HelpDeskComponent } from './help-desk/help-desk.component';
import { InstituteComponent } from './institute/institute.component';
import { JobMelaComponent } from './job-mela/job-mela.component';
import { JobsComponent } from './jobs/jobs.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { LoginComponent } from './login/login.component';
import { PagenotfountComponent } from './pagenotfount/pagenotfount.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { ReportsComponent } from './reports/reports.component';
import { SignupComponent } from './signup/signup.component';
import { StakeholdersComponent } from './stakeholders/stakeholders.component';
import { StudentComponent } from './student/student.component';
import { StudentupdateComponent } from './studentupdate/studentupdate.component';
import { TrainingSkillsComponent } from './training-skills/training-skills.component';

const routes: Routes = [
  {path:'', redirectTo:'/stakeholder', pathMatch:'full'},
  {path:'stakeholder', component:StakeholdersComponent},
  {path:'jobs', component:JobsComponent},
  {path:'training', component:TrainingSkillsComponent},
  {path:'jobmela', component:JobMelaComponent},
  {path:'jobs', component:JobsComponent},
  {path:'reports', component:ReportsComponent},
  {path:'helpdesk', component:HelpDeskComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'about', component:AboutComponent},
  {path:'candidate', component:CandidateComponent},
  {path:'student', component:StudentComponent},
  {path:'company', component:CompanyComponent},
  {path:'institute', component:InstituteComponent},
  {path:'federation', component:FederationComponent},
  {path:'aadharna', component:AaradhanaComponent},
  {path:'news', component:LatestNewsComponent},
  {path:'profile', component:ProfileInfoComponent},
  {path:'signup/:id', component:SignupComponent},
  {path:'supdate/:id', component:StudentupdateComponent},
  {path:'cupdate/:id', component:CompanyupdateComponent},
  {path:'iupdate', component:CourseupdateComponent},
  {path:'fupdate/:id', component:FederationupdateComponent},
  {path:'fupdate', component:FederationupdateComponent},
  {path:'aaupdate/:id', component:AaradhanaupdateComponent},
  {path:'pupdate/:id', component:ProfileupdateComponent},
  {path:'display', component:DisplaypageComponent},
  




  {path:'**', component:PagenotfountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRuotings=[
  AaradhanaComponent,
  AboutComponent,
  CandidateComponent,
  CompanyComponent,
  ContactsComponent,
  FederationComponent,
  HelpDeskComponent,
  InstituteComponent,
  JobMelaComponent,
  JobsComponent,
  LatestNewsComponent,
  LoginComponent,
  PagenotfountComponent,
  ProfileInfoComponent,
  ReportsComponent,
  SignupComponent,
  StakeholdersComponent,
  StudentComponent,
  TrainingSkillsComponent
]