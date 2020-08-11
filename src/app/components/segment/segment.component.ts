import { Component, OnInit, Input } from '@angular/core';
import { Segment } from 'src/app/model/segment';

@Component({
	selector: 'segment',
	templateUrl: './segment.component.html',
	styleUrls: ['./segment.component.scss']
})
export class SegmentComponent implements OnInit {

	@Input() segment: Segment;

	constructor() { }

	ngOnInit(): void {
	}

}
