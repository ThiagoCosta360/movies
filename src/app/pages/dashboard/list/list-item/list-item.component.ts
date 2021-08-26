import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/resources/interfaces/movie.interface';

@Component({
	selector: 'app-list-item',
	templateUrl: './list-item.component.html',
	styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
	@Input() movie!: Movie

	constructor() { }

	ngOnInit(): void {
	}

}
