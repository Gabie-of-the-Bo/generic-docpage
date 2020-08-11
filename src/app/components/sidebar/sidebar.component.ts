import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/model/section';
import { JsonService } from 'src/app/services/json.service';

@Component({
	selector: 'sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	color = {
		'background': 'teal',
		'border-right-color': 'gray',
		'border-right-style': 'solid'
	}

	sections: Section[] = []

	constructor(
		public jsonService: JsonService
	) { }

	ngOnInit(): void {
		this.jsonService.getDocument('sections').then(data => {
			this.sections = <Section[]>data;
		})
	}

}
