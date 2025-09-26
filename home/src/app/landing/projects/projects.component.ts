import { Component, OnInit } from '@angular/core';
interface Card {
  id: number;
  img: string;
  title: string;
  link: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{
  projects: Card[] = [
    {id: 1, img: '../../../assets/imgs/projects/dashboard_pf.jpg', title: 'Dashboard PF', link: 'https://plataforma-pf.sccon.com.br'},
    {id: 1, img: '../../../assets/imgs/projects/amazonia_legal.jpg', title: 'Amazônia Legal', link: 'https://plataforma-pf.sccon.com.br/#/deforestation-detector'},
    {id: 1, img: '../../../assets/imgs/projects/transparencia.jpg', title: 'Dashboard de Transparência', link: 'https://plataforma-pf.sccon.com.br/#/reports'},
    {id: 2, img: '', title: 'RedeMAIS', link: 'https://redemaisbr.com.br/'},
    {id: 3, img: '', title: 'SCCON', link: 'https://sccon.com.br/#/landing'},
    {id: 4, img: '', title: 'Embark', link: 'https://www.cedrotech.com/blog/embark-cockpit-para-garantir-renovacao-cadastra/'},
    {id: 5, img: '../../../assets/imgs/projects/expozebu.svg', title: 'Expozebu 2018', link: 'https://expozebu.com.br/'},
    {id: 6, img: '', title: 'Integrator', link: 'https://horacerta.evolog.com.br'},
    {id: 7, img: '', title: 'Hora Certa', link: 'https://integrador.evolog.com.br/'},
    {id: 8, img: '../../../assets/imgs/projects/chave_do_bem.jpg', title: 'Chave do Bem', link: 'http://www.chavedobem.com.br/'},
  ];
  responsiveOptions: any[] = [];

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1268px',
        numVisible: 4, // 4 cards visíveis em telas grandes
        numScroll: 4
      },
      {
        breakpoint: '1024px',
        numVisible: 3, // 4 cards visíveis em telas grandes
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  sendLink(link: string){
    window.open(link, '_blank')
  }
}
