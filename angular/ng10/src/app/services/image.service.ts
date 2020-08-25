import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageUrlData } from '../data/image_data.model';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private req: RequestService) {}

  getImageUrl(): Observable<string> {
    return this.req.getImageUrl();
  }
}
