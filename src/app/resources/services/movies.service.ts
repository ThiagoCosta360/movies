import { Injectable } from '@angular/core';
import { movies } from '../data/movies';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
	providedIn: 'root',
})
export class MoviesService {
	public get = (): Movie[] => movies;
}

