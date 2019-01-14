import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    GalleryComponent,
    BlogComponent,
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
