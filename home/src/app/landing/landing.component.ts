import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  section: number = 3;
  currentStation: number = 0;
  isScrolling: boolean = false;
  history = [
    'Sou apaixonado por tecnologia desde a infância. Aos 14 anos, um curso de <b>Web Designer</b> me apresentou ao mundo da programação com HTML5, CSS e Flash. Apesar de ter optado pela graduação em Administração, o interesse pela área foi reacendido durante a matéria de Sistemas de Informação.',
    'Logo após concluir a faculdade de Administração, iniciei a graduação em <b>Sistemas de Informação</b> e, em 2014, comecei a trabalhar em uma empresa de TI como <b>Analista Web</b>. Nesse papel, tive um contato profundo com o universo do <b>front-end</b>, desenhando esboços e traduzindo a visão dos clientes para a equipe de desenvolvimento.',
    'Essa experiência me fez descobrir minha verdadeira paixão. Desde 2017, me especializo em desenvolvimento front-end, acompanhando a evolução do <b>Angular</b> e de outras tecnologias. Minha maior motivação é dar vida à identidade dos meus clientes no mundo digital, criando soluções das quais eles se sintam representados e orgulhosos.'
  ];
  timeline = [
    {color: '#275397'},
    {color: '#24EEF9'},
    {color: '#DD45F9'},
    // {color: '#f94554ff'},
  ]
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

    this.scrollToSecao(this.currentStation);

    setTimeout(() => {
      this.isScrolling = false;
    }, 800); // 800ms de delay para evitar múltiplos scrolls rápidos
  }

  scrollToSecao(index: number) {
    const secaoElement = document.querySelectorAll('.section')[index] as HTMLElement;
    if (secaoElement) {
      window.scrollTo({
        top: secaoElement.offsetTop,
        behavior: 'smooth'
      });
    }
  }

  
}
