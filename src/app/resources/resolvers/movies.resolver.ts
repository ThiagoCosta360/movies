import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';
import { MoviesService } from '../services/movies.service';

@Injectable({ providedIn: 'root' })
export class MoviesResolver implements Resolve<Movie> {

	constructor(
		private moviesService: MoviesService,
	) {
	}

	resolve(): Observable<any> | Promise<any> | any {
		return this.moviesService.get();
	}
}


