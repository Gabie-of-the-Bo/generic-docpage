import { Component, OnInit, Input } from '@angular/core';
import { Segment } from 'src/app/model/segment';
import { KatexOptions } from 'ng-katex';

/*
	Import your Ace Editor modes here
*/
import 'brace/mode/python';

@Component({
	selector: 'segment',
	templateUrl: './segment.component.html',
	styleUrls: ['./segment.component.scss']
})
export class SegmentComponent implements OnInit {

	@Input() segment: Segment;

	options: KatexOptions = {
		displayMode: true,
		
	};

	constructor() { }

	ngOnInit(): void {
	}

}
