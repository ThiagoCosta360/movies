import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/resources/interfaces/movie.interface';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	public movies: Movie[]

	constructor(
		private route: ActivatedRoute
	) { 
		this.movies = this.route.snapshot.data['movies'];
	}

	ngOnInit(): void {
	}

}
