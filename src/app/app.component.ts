import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';


@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterModule, HomeComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'TemplateMatic';
	routeParameterValue;
}
