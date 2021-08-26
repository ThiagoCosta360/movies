import { Injectable } from '@angular/core';
import { NbSearchService } from '@nebular/theme';
import { movies } from '../data/movies';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
	providedIn: 'root',
})
export class MoviesService {
	public get = (): Movie[] => movies;
}

