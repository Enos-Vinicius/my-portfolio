import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  public services = [
    {id: 1, color: '#35CCDA', icon: 'pi pi-desktop', title: 'Desenvolvimento de aplicações Web Responsivas'},
    {id: 2, color: '#5465D9', icon: 'pi pi-chart-bar', title: 'Criação de Dashboards'},
    {id: 3, color: '#AE55E1', icon: 'pi pi-chart-line', title: 'Configuração de Google Analytics'},
    {id: 4, color: '#35CCDA', icon: 'pi pi-trophy', title: 'Otimização de Performance'},
    {id: 5, color: '#5465D9', icon: 'pi pi-receipt', title: 'Reestruturação de código (REFACTORING)'},
    {id: 6, color: '#AE55E1', icon: 'pi pi-sitemap', title: 'Integração de APIs'},
    {id: 7, color: '#35CCDA', icon: 'pi pi-id-card', title: 'Desenvolvimento de componentes Angular reutilizáveis'},
    {id: 8, color: '#5465D9', icon: 'pi pi-user-plus', title: 'Consultoria em Angular'},
  ]

  getShadow(color: string) {
    return color + '0px 0px 5px 2px';
  }
}
