import { Component, OnInit,  ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PlantillaComponent } from '../plantilla/plantilla.component';
import { PlantillaService, Plantilla } from '../services/plantilla.service';
import { IpcService } from '../services/ipc-render.service';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [RouterLink, PlantillaComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
	public plantillasBuscadas: Array<Plantilla> = [];

	constructor(public PS: PlantillaService, public ipcRenderer: IpcService, private cdr: ChangeDetectorRef) {  }

	ngOnInit(): void {
		this.plantillasBuscadas = this.PS.getTemp();
		this.cdr.detectChanges();
	}

}
