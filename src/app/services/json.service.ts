import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class JsonService {

	documents: Map<string, Promise<any>> = new Map<string, Promise<any>>();

	constructor(
		public http: HttpClient
	) { }

	loadJson(name: string){
		return this.http.get("assets/data/" + name + ".json").toPromise()
	}

	getDocument(name: string) {
		if(!this.documents.has(name)){
			this.documents[name] = this.loadJson(name)
		}

		return this.documents[name]
	}
}
