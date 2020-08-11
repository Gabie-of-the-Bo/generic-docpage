import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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

	@Output() changePage = new EventEmitter<string>();

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

	changeSelectedPage(file: string){
		this.changePage.emit(file);
	}

	clickAction(section: Section){
		if(section.subsections){
			this.subsections[section.name] = !this.subsections[section.name];
	
		} else if(section.file){
			this.changeSelectedPage(section.file)
		}
	}

	getSubState(section: Section){
		return this.subsections[section.name]? "active" : "inactive";
	}

	switchState(section: Section){
		this.subsections[section.name] = !this.subsections[section.name];
	}

}
