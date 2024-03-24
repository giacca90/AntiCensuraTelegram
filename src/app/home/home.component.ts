import { Component, OnInit,  ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PlantillaComponent } from '../plantilla/plantilla.component';
import { PlantillaService, Plantilla } from '../services/plantilla.service';
import { AgregarComponent } from '../agregar/agregar.component';
import { StatusComponent } from '../status/status.component';
import { IpcService } from '../services/ipc-render.service';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [RouterLink, PlantillaComponent, AgregarComponent, StatusComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
	public plantillasBuscadas: Array<Plantilla> = [];

	constructor(public PS: PlantillaService, public ipcRenderer: IpcService, private cdr: ChangeDetectorRef) {  }

	ngOnInit(): void {
		
	}

	busca() {
		const buscador: HTMLInputElement = document.getElementById('buscador') as HTMLInputElement;
		this.plantillasBuscadas = [];
		for (const plantilla of this.PS.getTemp()) {
			if (
				plantilla.nombre
					.toLocaleLowerCase()
					.includes(buscador.value.toLocaleLowerCase())
			) {
				this.plantillasBuscadas.push(plantilla);
			}
		}
		this.cdr.detectChanges();
	}

	abreDialog() {
		this.ipcRenderer.send('openDialog');
		this.ipcRenderer.on('archivos-de-carpeta', (event, files) => {
			const plantillas: Plantilla[] = [];
			for(let i=0; i<files.length; i++) {
				if (
					files[i].name.endsWith('odt') ||
          files[i].name.endsWith('docx')
				) {
					plantillas.push(new Plantilla(i+1,null,files[i].name,files[i].ruta));
				}
			}
			this.PS.setTemp(plantillas);
			this.plantillasBuscadas = plantillas;
			this.cdr.detectChanges();
		});
	}
}
