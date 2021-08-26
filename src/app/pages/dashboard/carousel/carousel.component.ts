import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbSearchService } from '@nebular/theme';
import { Movie } from 'src/app/resources/interfaces/movie.interface';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
	public movies: Movie[]

	constructor(
		private route: ActivatedRoute,
		private searchService: NbSearchService
	) { 
		this.movies = this.route.snapshot.data['movies'];
		this.searchService.onSearchSubmit()
			.subscribe(
				(search) => {
					this.movies = this.movies.filter(
						(movie) => movie.nome.includes(search.term)
					);
				},
				(error) => console.error(error)
			);
	}

	ngOnInit(): void {
	}


}
