import { Routes } from '@angular/router'
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';

export const AppRoutes: Routes = [
    { path: 'gallery', component: GalleryComponent },
    { path: 'blog', component: BlogComponent },
];
