import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class PlantillaService {
	public plantillas: Plantilla[] = [];
	constructor() {
		this.cargaDenuncias();
	}

	setTemp(_plantillas: Plantilla[]) {
		this.plantillas = _plantillas;
	}

	getTemp() {
		return this.plantillas;
	}

	getPlantillaForId(id: number): Plantilla {
		for (let i = 0; i < this.plantillas.length; i++) {
			if (this.plantillas[i].id == id) {
				return this.plantillas[i];
			}
		}
		return null;
	}

	async cargaDenuncias() {
		const denuncia:File = await fetch('https://raw.githubusercontent.com/giacca90/AntiCensuraTelegram/master/archivos/denuncia%20pedraz%20CGPJ.odt').then(response => response.blob()).then(blob => {
			return new File([blob], 'Denuncia pedraz CGPJ', { type: blob.type });
		});
		this.plantillas.push(new Plantilla(1, denuncia));

		const denuncia2:File = await fetch('https://raw.githubusercontent.com/giacca90/AntiCensuraTelegram/master/archivos/denuncia%20pedraz%20constitucional.odt').then(response => response.blob()).then(blob => {
			return new File([blob], 'Denuncia pedraz Constitucional', { type: blob.type });
		});
		this.plantillas.push(new Plantilla(2, denuncia2));

		const denuncia3:File = await fetch('https://raw.githubusercontent.com/giacca90/AntiCensuraTelegram/master/archivos/denuncia%20pedraz%20defensor%20del%20pueblo.odt').then(response => response.blob()).then(blob => {
			return new File([blob], 'Denuncia pedraz Defensor del Pueblo', { type: blob.type });
		});
		this.plantillas.push(new Plantilla(3, denuncia3));
		
		const denuncia4:File = await fetch('https://raw.githubusercontent.com/giacca90/AntiCensuraTelegram/master/archivos/denuncia%20pedraz%20europa.odt').then(response => response.blob()).then(blob => {
			return new File([blob], 'Denuncia pedraz Europa', { type: blob.type });
		});
		this.plantillas.push(new Plantilla(4, denuncia4));

		const denuncia5:File = await fetch('https://raw.githubusercontent.com/giacca90/AntiCensuraTelegram/master/archivos/denuncia%20pedraz%20fiscalia.odt').then(response => response.blob()).then(blob => {
			return new File([blob], 'Denuncia pedraz Fiscalia', { type: blob.type });
		});
		this.plantillas.push(new Plantilla(5, denuncia5));

	}

}

export class Plantilla {
	id: number;
	file: File;
	nombre: string;
	address: string;

	constructor(_id: number, _file: File, _nombre?: string, _address?: string) {
		this.id = _id;
		this.file = _file;
		if(_file !== null) {
			this.nombre = _file.name;
			this.address = _file.webkitRelativePath;
		}else{
			this.nombre = _nombre;
			this.address = _address;
		}
	}

	toString() {
		return this.id + ': ' + this.nombre;
	}
}
