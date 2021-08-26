import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/resources/interfaces/movie.interface';

@Component({
	selector: 'app-carrossel',
	templateUrl: './carrossel.component.html',
	styleUrls: ['./carrossel.component.scss']
})
export class CarrosselComponent implements OnInit {
	public movies: Movie[]

	constructor(
		private route: ActivatedRoute
	) {
		this.movies = this.route.snapshot.data['movies'];
		console.log(this.movies);
	}

	ngOnInit(): void {
	}

}
