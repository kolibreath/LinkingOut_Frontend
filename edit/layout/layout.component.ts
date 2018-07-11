import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {


  username: string;
  sex: string;
  introduction: string;
  hobby: string;
  email: string;
  university: string;
  major: string;

  editOnUsername = false;
  editOnSex = false;
  editOnIntroduction = false;
  editOnHobby = false;
  editOnEmail = false;
  editOnUniversity = false;
  editOnMajor = false;

  constructor() { }

  ngOnInit() {
  }


  edit(i): void {
    switch (i) {
      case 1: {
        this.editOnUsername = !this.editOnUsername;
        break;
      }
      case 2: {
        this.editOnSex = !this.editOnSex;
        break;
      }
      case 3: {
        this.editOnIntroduction = !this.editOnIntroduction;
        break;
      }
      case 4: {
        this.editOnHobby = !this.editOnHobby;
        break;
      }
      case 5: {
        this.editOnEmail = !this.editOnEmail;
        break;
      }
      case 6: {
        this.editOnUniversity = !this.editOnUniversity;
        break;
      }
      case 7: {
        this.editOnMajor = !this.editOnMajor;
        break;
      }
    }
  }

}
