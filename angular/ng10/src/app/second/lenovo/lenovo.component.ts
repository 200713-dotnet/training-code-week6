import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lenovo',
  templateUrl: './lenovo.component.html',
  styleUrls: ['./lenovo.component.css']
})
export class LenovoComponent implements OnInit {
  oneway: string;
  twoway: string;
  image: string;

  constructor() { }

  ngOnInit(): void {
    this.oneway = 'hello angular';
    this.twoway = "say something";
    this.image = "http://placecorgi.com/300";
  }
}
