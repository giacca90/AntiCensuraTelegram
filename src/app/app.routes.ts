import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlantillaComponent } from './plantilla/plantilla.component';



export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'plantilla/:id', component: PlantillaComponent },
	{ path: '*.*', redirectTo: ''}

];