import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/model/section';

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

	sections: Section[] = [
		new Section('About', ''),
		new Section('Update blog', ''),
		new Section('Downloads', ''),
		new Section('Documentation', ''),
		new Section('Contact', ''),
	]

	constructor() { }

	ngOnInit(): void {
	}

}
