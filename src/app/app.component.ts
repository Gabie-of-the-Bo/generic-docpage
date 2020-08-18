import { Component, OnInit } from '@angular/core';
import { Segment } from './model/segment';
import { JsonService } from './services/json.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
	loading: boolean = true;

	page: number = 1;
	maxpage: number = 1;
	paged: boolean = false;
	
	fullSegments: Segment[] = [];
	segments: Segment[] = [];

	constructor(
		public jsonService: JsonService
	) {}

	ngOnInit(): void {
		this.changePage('welcome');
	}

	getWaitTime(){
		return Math.floor(Math.random() * (750 - 500 + 1)) + 500
	}

	changePage(name: string){
		this.loading = true;
		this.page = 1;
		this.maxpage = 1;
		this.paged = false;

		setTimeout(() => {
			this.jsonService.getDocument(name).then(data => {
				this.fullSegments = <Segment[]>data;

				for(let s of this.fullSegments){
					s.page = s.page? s.page : this.page;
				}

				this.segments = this.fullSegments.filter(s => s.page == this.page);
				this.loading = false;
				this.paged = new Set(this.fullSegments.map(s => s.page)).size > 1;
				this.maxpage = Math.max(...this.fullSegments.map(s => s.page));
			
			}).catch(() => {
				this.loading = false;
			})

		}, this.getWaitTime())
	}

	changeSelectedPage(inc: number){
		this.page += inc;
		this.segments = this.fullSegments.filter(s => s.page == this.page);
	}
}
