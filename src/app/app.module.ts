import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { ButtonOneComponent } from './components/buttons/button-one/button-one.component';
import { ButtonTwoComponent } from './components/buttons/button-two/button-two.component';
import { MainSectionComponent } from './components/home/main-section/main-section.component';
import { AboutSectionComponent } from './components/home/about-section/about-section.component';
import { SkillsSectionComponent } from './components/home/skills-section/skills-section.component';
import { CardSkillsComponent } from './components/cards/card-skills/card-skills.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { ProjectSectionComponent } from './components/home/project-section/project-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonOneComponent,
    ButtonTwoComponent,
    MainSectionComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    CardSkillsComponent,
    FooterComponent,
    ProjectSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
