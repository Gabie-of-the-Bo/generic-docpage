import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { Segment } from 'src/app/model/segment';

@Component({
	selector: 'pagebody',
	templateUrl: './pagebody.component.html',
	styleUrls: ['./pagebody.component.scss']
})
export class PagebodyComponent implements OnInit {

	@Input() segments: Segment[] = []; 

	@Input() loading: boolean;
	@Input() paged: boolean;
	@Input() page: number;
	@Input() maxpage: number;

	@Output() changePage: EventEmitter<number> = new EventEmitter();

	color = {
	}

	colorContent = {
		'background': 'lightyellow'
	}

	constructor(
		public jsonService: JsonService
	) { }

	ngOnInit(): void {}

	changePageIncrement(inc: number){
		this.changePage.emit(inc);
	}

}
