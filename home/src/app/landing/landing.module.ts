import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { LandingComponent } from './landing.component';
import { ObjectKeysPipe } from 'src/shared/pipes/object-keys.pipe';
import { SharedModule } from 'src/shared/shared.module';



@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    ServicesComponent,
    ContactComponent,
    ObjectKeysPipe
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule
  ]
})
export class LandingModule { }
