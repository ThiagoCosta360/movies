import { Injectable } from '@angular/core';
import { movies } from '../data/movies';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
	providedIn: 'root',
})
export class MoviesService {

	public get = (query?: string): Movie[] => {		
		let movieList = movies;
		
		if (query) {
			movieList = movies.filter(
				(movie) => movie.nome.toLowerCase().includes(query.toLowerCase())
			);
		}

		return movieList; 
	};
}

