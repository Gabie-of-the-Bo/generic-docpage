import { Component, OnInit, Input } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { Segment } from 'src/app/model/segment';

@Component({
	selector: 'pagebody',
	templateUrl: './pagebody.component.html',
	styleUrls: ['./pagebody.component.scss']
})
export class PagebodyComponent implements OnInit {

	color = {
		'background': 'lightyellow'
	}

	@Input() segments: Segment[] = []; 

	constructor(
		public jsonService: JsonService
	) { }

	ngOnInit(): void {}

}
