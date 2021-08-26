import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbSearchService } from '@nebular/theme';
import { Movie } from 'src/app/resources/interfaces/movie.interface';
import { MoviesService } from 'src/app/resources/services/movies.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	public movies: Movie[]

	constructor(
		private readonly route: ActivatedRoute,
		private readonly searchService: NbSearchService,
		private readonly moviesService: MoviesService
	) { 
		this.movies = this.route.snapshot.data['movies'];
		this.searchService.onSearchSubmit()
			.subscribe(
				(search) => {
					this.movies = this.moviesService.get(search.term);
				},
				(error) => console.error(error)
			);
	}

	ngOnInit(): void {
	}

}
