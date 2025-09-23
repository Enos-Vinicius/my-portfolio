import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  cards = [
    {proficiency: {time: 9, depth: 5, frequency: 7, contribution: 5}, primary:'rgb(248, 0, 248)', active: true, title: 'Angular', icon: '../../assets/imgs/icons/angular.png'},
    {proficiency: {time: 10, depth: 5, frequency: 10, contribution: 10}, primary:'rgb(163, 237, 186)', active: false, title: 'Highcharts', icon: '../../assets/imgs/icons/highcharts.svg'},
    {proficiency: {time: 10, depth: 5, frequency: 10, contribution: 10}, primary:'rgb(151, 58, 202)', active: false, title: 'PrimeNG', icon: '../../assets/imgs/icons/primeng.svg'},
    {proficiency: {time: 10, depth: 5, frequency: 10, contribution: 10}, primary:'rgb(0, 170, 255)', active: false, title: 'OpenLayers', icon: '../../assets/imgs/icons/ol.svg'},
    {proficiency: {time: 10, depth: 5, frequency: 10, contribution: 10}, primary:'rgb(0, 220, 146)', active: false, title: 'PrimeFlex', icon: '../../assets/imgs/icons/primeflex.png'},
    {proficiency: {time: 10, depth: 5, frequency: 10, contribution: 10}, primary:'rgb(93, 123, 253)', active: false, title: 'Material', icon: '../../assets/imgs/icons/material.svg'},
    {proficiency: {time: 10, depth: 5, frequency: 10, contribution: 10}, primary:'rgb(76, 203, 129)', active: false, title: 'Echarts', icon: '../../assets/imgs/icons/echarts.svg'},
    {proficiency: {time: 10, depth: 5, frequency: 10, contribution: 10}, primary:'rgb(219, 30, 133)', active: false, title: 'RxJS', icon: '../../assets/imgs/icons/rxjs.svg'},
    {proficiency: {time: 10, depth: 5, frequency: 10, contribution: 10}, primary:'rgb(51, 170, 221)', active: false, title: 'CS3', icon: '../../assets/imgs/icons/css3.svg'},
    {proficiency: {time: 10, depth: 5, frequency: 10, contribution: 10}, primary:'rgb(233, 62, 48)', active: false, title: 'HTML5', icon: '../../assets/imgs/icons/html5.png'},
    {proficiency: {time: 10, depth: 5, frequency: 10, contribution: 10}, primary:'rgb(240, 60, 46)', active: false, title: 'Git', icon: '../../assets/imgs/icons/git.svg'},
    {proficiency: {time: 10, depth: 5, frequency: 10, contribution: 10}, primary:'rgb(209, 98, 155)', active: false, title: 'SCSS', icon: '../../assets/imgs/icons/scss.svg'},
    {proficiency: {time: 10, depth: 5, frequency: 10, contribution: 10}, primary:'rgb(93, 174, 71)', active: false, title: 'Nodejs', icon: '../../assets/imgs/icons/nodejs.png'},
    {proficiency: {time: 10, depth: 5, frequency: 10, contribution: 10}, primary:'rgb(51, 196, 129)', active: false, title: 'Excel', icon: '../../assets/imgs/icons/excel.svg'},
    {proficiency: {time: 10, depth: 5, frequency: 10, contribution: 10}, primary:'rgb(247, 154, 32)', active: false, title: 'Google Analytics', icon: '../../assets/imgs/icons/ga.png'},
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
