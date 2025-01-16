import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  yyyy: number;
  constructor() { }

  public json=require("package.json");

  ngOnInit() {
    this.yyyy = new Date().getFullYear();
  }


}
