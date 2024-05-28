import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { CounterComponent } from './counter/counter.component';
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'facesnaps',
        component: FaceSnapListComponent 
    },

    {
        path: 'facesnaps/:id',
        component: SingleFaceSnapComponent
    },
    {
        path: 'counter',
        component: CounterComponent
    },

    { 
        path: 'create', component: NewFaceSnapComponent 
    },


    
];
