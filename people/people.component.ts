import {Component, OnInit} from '@angular/core';
import {PeopleService} from '../people.service';
import {People} from '../people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

    tabs = [
    {
      active: true,
      name: '动态',
      icon: 'anticon anticon-star'
    },
    {
      active: false,
      name: '资源',
      icon: 'anticon anticon-folder'
    },
    {
      active: false,
      name: '二手',
      icon: 'anticon anticon-shop'
    },
    {
      active: false,
      name: '兼职',
      icon: 'anticon anticon-pay-circle-o'
    }
  ];

  contents = [
    {activity: 'hello world'},
    {activity: 'hello java'}
  ];

  people: People;

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {
    this.getPeoples();
  }

  getPeoples(): void {
    this.peopleService.getPeople().subscribe(people => this.people = people);
}

}
