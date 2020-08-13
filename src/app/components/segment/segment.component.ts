import { Component, OnInit, Input } from '@angular/core';
import { Segment } from 'src/app/model/segment';
import { KatexOptions } from 'ng-katex';

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
