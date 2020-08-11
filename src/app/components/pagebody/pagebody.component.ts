import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'pagebody',
	templateUrl: './pagebody.component.html',
	styleUrls: ['./pagebody.component.scss']
})
export class PagebodyComponent implements OnInit {

	color = {
		'background': 'lightyellow'
	}

	constructor() { }

	ngOnInit(): void {
	}

}
