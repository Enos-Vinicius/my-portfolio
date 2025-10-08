import { Component, HostListener, OnInit } from '@angular/core';
interface Card {
  id: number;
  img: string;
  year: string;
  description: string;
  class: string;
  title: string;
  link: string;
  icon: string
  tooltip: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{
  projects: Card[] = [
    {id: 1, tooltip: 'Participação junto a equipe que desenvolveu', icon: 'pi pi-users', year: '2025', description: 'O Dashboard apresenta os alertas de detecção de mudanças do Programa Brasil MAIS. Ele utiliza uma visualização interativa em mapa e gráficos gerados automaticamente, a partir de filtros definidos pelo usuário, para oferecer mais objetividade e simplicidade na análise desses alertas.', class: 'background-project', img: '../../../assets/imgs/projects/dashboard_pf.jpg', title: 'Dashboard PF', link: 'https://plataforma-pf.sccon.com.br'},
    {id: 2, tooltip: 'Atuação sozinha no projeto', icon: 'pi pi-user', year: '2025', description: 'Dashboard público que exibe a dinâmica de mudanças na Amazônia Legal. Utiliza o Analytic de Desmatamento para fornecer dados quantitativos, consolidados mensalmente e filtráveis conforme as definições do usuário.', class: 'background-project', img: '../../../assets/imgs/projects/amazonia_legal.jpg', title: 'Amazônia Legal', link: 'https://plataforma-pf.sccon.com.br/#/deforestation-detector'},
    {id: 3, tooltip: 'Participação junto a equipe que desenvolveu', icon: 'pi pi-users', year: '2024', description: 'Dashboard mensal para apurar e divulgar indicadores de uso e resultados do Programa Brasil MAIS, utilizado pela Polícia Federal, Ministério da Justiça, Secretaria Nacional de Segurança Pública e outras entidades do governo.', class: 'background-project', img: '../../../assets/imgs/projects/transparencia.jpg', title: 'Dashboard de Transparência', link: 'https://plataforma-pf.sccon.com.br/#/reports'},
    {id: 4, tooltip: 'Atuação sozinha no projeto', icon: 'pi pi-user', year: '2024', description: 'RedeMAIS (Rede Nacional de Combate ao Crime Ambiental) do Brasil MAIS, um programa que disponibiliza imagens de satélite e alertas para monitoramento ambiental a órgãos públicos, sendo um projeto estratégico do Ministério da Justiça e Segurança Pública (MJSP) e da Polícia Federal (PF).', class: 'background-project', img: '../../../assets/imgs/projects/brasil_mais.jpg', title: 'RedeMAIS', link: 'https://redemaisbr.com.br/'},
    {id: 5, tooltip: 'Atuação sozinha no projeto', icon: 'pi pi-user', year: '2023', description: 'A SCCON é uma empresa brasileira do segmento geoespacial (desde 2008) e distribuidora oficial da Planet no Brasil (desde 2016). Ela fornece soluções que utilizam imagens diárias de alta resolução e Analytics para monitorar e medir mudanças nos biomas. A plataforma gera dados e alertas dinâmicos, facilitando decisões mais eficientes e sustentáveis em várias aplicações.', class: 'background-project', img: '../../../assets/imgs/projects/sccon.jpg', title: 'SCCON', link: 'https://sccon.com.br/#/landing'},
    {id: 6, tooltip: 'Participação junto a equipe que desenvolveu', icon: 'pi pi-users', year: '2018', description: 'O Embark é uma plataforma de abertura de contas digitais que automatiza a validação e a renovação de cadastros, integrando-se a diversos sistemas externos. É muito usado no ramo financeiro (via integração com SINACOR), agilizando a aprovação em corretoras, mas serve para qualquer empresa que precise de gestão de cadastros eficiente.', class: 'img-project', img: '../../../assets/imgs/projects/cedro_technologies.webp', title: 'Embark', link: 'https://www.cedrotech.com/blog/embark-cockpit-para-garantir-renovacao-cadastra/'},
    {id: 6, tooltip: 'Atuação sozinha no projeto', icon: 'pi pi-user', year: '2018', description: 'Desenvolvi o site de divulgação da Expozebu 2018. Este é um dos maiores eventos de leilão de gado Nelore do mundo. A feira atrai público e expositores de todo o Brasil, contando com grandes leilões, shows de artistas renomados e uma vasta programação do setor agro.', class: 'img-project', img: '../../../assets/imgs/projects/expozebu.svg', title: 'Expozebu 2018', link: 'https://expozebu.com.br/'},
    {id: 9, tooltip: 'Participação junto a equipe que desenvolveu', icon: 'pi pi-users', year: '2018', description: 'Integrando o ecossistema Evolog, o Hora Certa é a solução para a gestão de acesso de veículos nos armazéns da Bravo. Ele permite que as transportadoras realizem o agendamento de horários, oferecendo ao coordenador do Armazém uma visão completa do volume de cargas e descargas previsto para o dia. Após o agendamento, o motorista apresenta na portaria o protocolo gerado pelo sistema, que serve como documento para liberar sua entrada no armazém.', class: 'img-project', img: '../../../assets/imgs/projects/evolog.svg', title: 'Hora Certa', link: 'https://horacerta.evolog.com.br'},
    {id: 10, tooltip: 'Atuação sozinha no projeto', icon: 'pi pi-user',  year: '2018', description: 'Apresentamos o site da campanha beneficente, fruto da união de esforços entre o Rotary Club e o Lions Club de Uberaba. A ação foi desenvolvida com o propósito de mobilizar a comunidade para a arrecadação de doações, que foram integralmente repassadas para entidades assistenciais da região.', class: 'background-project', img: '../../../assets/imgs/projects/chave_do_bem.jpg', title: 'Chave do Bem', link: 'http://www.chavedobem.com.br/'},
    {id: 11, tooltip: 'Atuação sozinha no projeto', icon: 'pi pi-user', year: '2017', description: 'Em 2017, a Bravo Logística adotou o modelo 4PL (Fourth Party Logistics), o que demandou a criação de um ecossistema digital robusto para apoiar sua nova gestão. Dentre os componentes desse ecossistema (Evolog), o Integrador tem o papel crucial de conectar e sincronizar todos os demais sistemas que o compõem.', class: 'img-project', img: '../../../assets/imgs/projects/evolog.svg', title: 'Integrator', link: 'https://integrador.evolog.com.br'},
  ];
  responsiveOptions: any[] = [];
  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    const target = event.target as HTMLElement;
    const scrollContainer = target.closest('.legend');
    if (scrollContainer) {
      event.stopPropagation();
    }
  }
  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '2000px',
        numVisible: 4, // 4 cards visíveis em telas grandes
        numScroll: 4
      },
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 2
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
