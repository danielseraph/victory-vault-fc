import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ShopComponent } from './component/shop/shop.component';
import { VideoComponent } from './component/video/video.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'shop',
        component:ShopComponent
    },
    {
        path: 'video',
        component:VideoComponent
    }
];
