import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//Services
import {TeamService} from './team.service';
//Components
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { UsComponent } from './us/us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeamComponent } from './team/team.component'


const routes : Routes =[
{path:"contact",component: ContactComponent},
{path:"us",component: UsComponent},
{path:"home",component: HomeComponent},
{ path: '',
pathMatch: 'full',
component: HomeComponent
},
{path:"team/:id",component: TeamComponent},
  { path: '**', component: PageNotFoundComponent }
]
@NgModule({
  declarations: [
  AppComponent,
  HeaderComponent,
  FooterComponent,
  ContactComponent,
  HomeComponent,
  UsComponent,
  PageNotFoundComponent,
  TeamComponent
  ],
  imports: [
  BrowserModule,
  RouterModule.forRoot(routes)
  ],
  providers: [
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
