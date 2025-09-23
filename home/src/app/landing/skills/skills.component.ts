import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  cards = [
    {active: true, title: 'Angular', icon: '../../assets/imgs/icons/angular.png'},
    {active: false, title: 'Highcharts', icon: '../../assets/imgs/icons/highcharts.svg'},
    {active: false, title: 'PrimeNG', icon: '../../assets/imgs/icons/primeng.svg'},
    {active: false, title: 'OpenLayers', icon: '../../assets/imgs/icons/ol.svg'},
    {active: false, title: 'PrimeFlex', icon: '../../assets/imgs/icons/primeflex.png'},
    {active: false, title: 'Material', icon: '../../assets/imgs/icons/material.svg'},
    {active: false, title: 'Echarts', icon: ''},
    {active: false, title: 'RxJS', icon: ''},
    {active: false, title: 'CS3', icon: ''},
    {active: false, title: 'HTML5', icon: ''},
    {active: false, title: 'Git', icon: ''},
    {active: false, title: 'SCSS', icon: ''},
    {active: false, title: 'Nodejs', icon: ''},
    {active: false, title: 'Excel', icon: ''},
    {active: false, title: 'Google Analytics', icon: ''},
  ];

  getSelectd(){
    return this.cards.filter(x => x.active)[0];
  }

  setCard(cardTitle: string){

    this.cards.forEach(card => {
      card.active = card.title === cardTitle;
    });
  }
}
