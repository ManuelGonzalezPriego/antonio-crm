import { Component, OnInit } from '@angular/core';
import { author,version }from 'package.json';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  yyyy: number;
  constructor() { }

  public nombre=author;
  public version=version;

  ngOnInit() {
    this.yyyy = new Date().getFullYear();
  }


}
