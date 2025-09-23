import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  
  history = [
    'Sou apaixonado por tecnologia desde a infância. Aos 17 anos, um curso de <b>Web Designer</b> me apresentou ao mundo da programação com HTML5, CSS e Flash. Apesar de ter optado pela graduação em Administração, o interesse pela área foi reacendido durante a matéria de Sistemas de Informação.',
    'Logo após concluir a faculdade de Administração, iniciei a graduação em <b>Sistemas de Informação</b> e, em 2014, comecei a trabalhar em uma empresa de TI como <b>Analista Web</b>. Nesse papel, tive um contato profundo com o universo do <b>front-end</b>, desenhando esboços e traduzindo a visão dos clientes para a equipe de desenvolvimento.',
    'Essa experiência me fez descobrir minha verdadeira paixão. Desde 2017, me especializo em desenvolvimento front-end, acompanhando a evolução do <b>Angular</b> e de outras tecnologias. Minha maior motivação é dar vida à identidade dos meus clientes no mundo digital, criando soluções das quais eles se sintam representados e orgulhosos.'
  ];

  timeline = [
    {id: 1, color: 'rgba(39, 83, 151, 1)', year: '2007', textLeft: '', textRight: ''},
    {id: 2, color: 'rgba(36, 238, 249, 1)', year: '2009', textLeft: 'web Designer', textRight: ''},
    {id: 3, color: 'rgba(221, 69, 249, 1)', year: '2011', textLeft: '', textRight: 'Coordenador de Expedição'},
    {id: 4, color: 'rgba(69, 249, 99, 1)', year: '2014', textLeft: 'Administração de Empresas', textRight: ''},
    {id: 6, color: 'rgba(249, 141, 69, 1)', year: '2016', textLeft: '', textRight: 'Analista Web'},
    {id: 7, color: 'rgba(69, 141, 249, 1)', year: '2017', textLeft: 'Sistemas de Informação', textRight: ''},
    {id: 8, color: 'rgba(249, 69, 144, 1)', year: '2018', textLeft: '', textRight: 'Programador Full Stack - Junior'},
    {id: 9, color: 'rgba(69, 81, 249, 1)', year: '2019', textLeft: 'Programador Full Stack - Pleno', textRight: ''},
    {id: 10, color: 'rgba(249, 69, 84, 1)', year: '2020', textLeft: '', textRight: 'Front-End Pleno'},
    {id: 11, color: 'rgba(4, 139, 94, 1)', year: '2021', textLeft: 'Analista Front-End Sênior', textRight: ''},
    {id: 12, color: 'rgba(213, 69, 249, 1)', year: '2025', textLeft: '', textRight: 'Analista Front-End Sênior'},
  ];
  
  stylesCurrent: { [key: string]: string } = {
    'background-color': 'transparent',
    'transition': 'background-color 0.3s ease',
  };
  
  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    const target = event.target as HTMLElement;
    const scrollContainer = target.closest('.container');
    if (scrollContainer) {
      event.stopPropagation();
    }
  }
  
  onMouseEnterCircle(item: any) {
    let result = this.timeline.filter(pos => pos.color === item.color)[0];
    if(result === item){
      this.stylesCurrent['background-color'] = item.color;
    }
  }

  onMouseLeaveCircle() {
    this.stylesCurrent['background-color'] = 'transparent';
  }
}
