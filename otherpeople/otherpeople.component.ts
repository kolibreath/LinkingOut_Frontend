import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otherpeople',
  templateUrl: './otherpeople.component.html',
  styleUrls: ['./otherpeople.component.css']
})
export class OtherpeopleComponent implements OnInit {
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

  people = {
    username: 'Mike',
    introduction: 'Hello World'
  };

  constructor() { }

  ngOnInit() {
  }

}
