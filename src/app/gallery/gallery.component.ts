import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  pagePhoto;
  currentPage: number = 1;
  size: number= 10;
  pages: Array<number> = [];
  totalPages: number;
  motCle: string = '';

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
  }

onSearch(dataForm){
   this.galleryService.search(dataForm.motCle, this.size , this.currentPage)
    .subscribe((myData: {'totalHits': number, 'hits': [] }) => {
    this.pagePhoto = myData;
    this.totalPages = myData.totalHits / this.size;
    this.pages = new Array(Math.round(this.totalPages));
  }, err =>
  {
    console.log('Error on connection');
  });
}

  goToPage(index){
    this.currentPage = index + 1;
    this.onSearch({motCle: this.motCle});
  }

}
