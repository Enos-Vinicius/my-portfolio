import { Component, HostListener } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  section: number = 6;
  currentStation: number = 0;
  isScrolling: boolean = false;
  sections = [
    { id: 'home', component: HomeComponent },
    { id: 'about-me', component: AboutMeComponent },
    { id: 'skills', component: SkillsComponent },
    { id: 'projects', component: ProjectsComponent },
    { id: 'services', component: ServicesComponent },
    { id: 'contact', component: ContactComponent }
  ];
  @HostListener('window:wheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (this.isScrolling) {
      return;
    }

    this.isScrolling = true;
    const direcao = event.deltaY > 0 ? 'down' : 'up';

    if (direcao === 'down' && this.currentStation < this.section - 1) {
      this.currentStation++;
    } else if (direcao === 'up' && this.currentStation > 0) {
      this.currentStation--;
    }

    this.scrollToSection(this.currentStation);

    setTimeout(() => {
      this.isScrolling = false;
    }, 800);
  }

  scrollToSection(index: number) {
    const sectionElement = document.querySelectorAll('.section')[index] as HTMLElement;
    if (sectionElement) {
      window.scrollTo({
        top: sectionElement.offsetTop,
        behavior: 'smooth'
      });
    }
  }

}
