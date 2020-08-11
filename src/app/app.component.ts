import { Component, OnInit } from '@angular/core';
import { Segment } from './model/segment';
import { JsonService } from './services/json.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
	segments: Segment[] = [];

	constructor(
		public jsonService: JsonService
	) {}

	ngOnInit(): void {
		this.changePage('welcome');
	}

	changePage(name: string){
		this.jsonService.getDocument(name).then(data => {
			this.segments = <Segment[]>data;
		})
	}
}
