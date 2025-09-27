import { Component, OnInit } from '@angular/core';
interface Card {
  id: number;
  img: string;
  year: string;
  description: string;
  class: string;
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
    {id: 1, year: '2025', description: 'O Dashboard apresenta os alertas de detecção de mudanças do Programa Brasil MAIS. Ele utiliza uma visualização interativa em mapa e gráficos gerados automaticamente, a partir de filtros definidos pelo usuário, para oferecer mais objetividade e simplicidade na análise desses alertas.', class: 'background-project', img: '../../../assets/imgs/projects/dashboard_pf.jpg', title: 'Dashboard PF', link: 'https://plataforma-pf.sccon.com.br'},
    {id: 2, year: '2025', description: 'Dashboard público que exibe a dinâmica de mudanças na Amazônia Legal. Utiliza o Analytic de Desmatamento para fornecer dados quantitativos, consolidados mensalmente e filtráveis conforme as definições do usuário.', class: 'background-project', img: '../../../assets/imgs/projects/amazonia_legal.jpg', title: 'Amazônia Legal', link: 'https://plataforma-pf.sccon.com.br/#/deforestation-detector'},
    {id: 3, year: '2024', description: 'Dashboard mensal para apurar e divulgar indicadores de uso e resultados do Programa Brasil MAIS, utilizado pela Polícia Federal, Ministério da Justiça, Secretaria Nacional de Segurança Pública e outras entidades do governo.', class: 'background-project', img: '../../../assets/imgs/projects/transparencia.jpg', title: 'Dashboard de Transparência', link: 'https://plataforma-pf.sccon.com.br/#/reports'},
    {id: 4, year: '2024', description: '', class: 'background-project', img: '', title: 'RedeMAIS', link: 'https://redemaisbr.com.br/'},
    {id: 5, year: '2023', description: '', class: 'background-project', img: '../../../assets/imgs/projects/sccon.jpg', title: 'SCCON', link: 'https://sccon.com.br/#/landing'},
    {id: 6, year: '2018', description: '', class: 'img-project', img: '../../../assets/imgs/projects/cedro_technologies.webp', title: 'Expozebu 2018', link: 'https://expozebu.com.br/'},
    {id: 8, year: '2019', description: '', class: 'img-project', img: '../../../assets/imgs/projects/evolog.svg', title: 'Integrator', link: 'https://integrador.evolog.com.br'},
    {id: 9, year: '2018', description: '', class: 'img-project', img: '../../../assets/imgs/projects/evolog.svg', title: 'Hora Certa', link: 'https://horacerta.evolog.com.br'},
    {id: 10, year: '2018', description: '', class: 'background-project', img: '../../../assets/imgs/projects/chave_do_bem.jpg', title: 'Chave do Bem', link: 'http://www.chavedobem.com.br/'},
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
