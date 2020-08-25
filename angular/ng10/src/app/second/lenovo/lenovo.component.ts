import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageService } from '../../services/image.service';
import { ImageUrlData } from '../../data/image_data.model';

@Component({
  selector: 'app-lenovo',
  templateUrl: './lenovo.component.html',
  styleUrls: ['./lenovo.component.css']
})
export class LenovoComponent implements OnInit {
  oneway: string;
  twoway: string;
  image$: Observable<string>;

  constructor(private img: ImageService) { }

  ngOnInit(): void {
    this.oneway = 'hello angular';
    this.twoway = 'say something';
    this.image$ = this.img.getImageUrl();
  }
}
