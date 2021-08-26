import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/resources/interfaces/movie.interface';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
	public movies: Movie[]

  constructor(
		private route: ActivatedRoute
	) { 
		this.movies = this.route.snapshot.data['movies'];
	}

  ngOnInit(): void {
  }

}
