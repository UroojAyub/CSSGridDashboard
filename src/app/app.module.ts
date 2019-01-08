import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    GalleryComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
