import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  search(motCle: string, size: number, page: number){
    return this.http.get('https://pixabay.com/api/?key=19709368-a64ccda0f927414f7df9f9c17&q=' + motCle +
     '&image_type=photo&per_page=' + size + '&page=' + page + '' );
  }

}
