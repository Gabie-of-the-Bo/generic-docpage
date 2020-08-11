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
	subsections: Map<string, boolean> = new Map();

	constructor(
		public jsonService: JsonService
	) { }

	ngOnInit(): void {
		this.jsonService.getDocument('sections').then(data => {
			this.sections = <Section[]>data;
			this.subsections = new Map()

			for(let s of this.sections){
				this.subsections[s.name] = false;
			}
		})
	}

	getArrow(section: Section){
		if(section.subsections){
			return this.subsections[section.name]? "v" : ">"
		}

		return '';
	}

	getSubState(section: Section){
		return this.subsections[section.name]? "active" : "inactive";
	}

	switchState(section: Section){
		this.subsections[section.name] = !this.subsections[section.name];
	}

}
