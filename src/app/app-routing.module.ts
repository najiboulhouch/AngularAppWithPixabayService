import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'about' , component: AboutComponent},
  {path : 'contacts' , component: ContactsComponent},
  {path : 'gallery' , component: GalleryComponent},
  {path : '' , redirectTo: '/about',  pathMatch: 'full'}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
