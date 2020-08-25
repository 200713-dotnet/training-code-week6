import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageUrlData } from 'src/app/data/image_data.model';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-thinkpad',
  templateUrl: './thinkpad.component.html',
  styleUrls: ['./thinkpad.component.css']
})
export class ThinkpadComponent implements OnInit {
  image$: Observable<string>;

  constructor(private img: ImageService) { }

  ngOnInit(): void {
    this.image$ = this.img.getImageUrl();
  }
}
