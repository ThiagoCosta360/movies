import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/resources/interfaces/movie.interface';

@Component({
	selector: 'app-carousel-item',
	templateUrl: './carousel-item.component.html',
	styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent implements OnInit {
	@Input() movie!: Movie

	constructor() { }

	ngOnInit(): void {
	}

}
