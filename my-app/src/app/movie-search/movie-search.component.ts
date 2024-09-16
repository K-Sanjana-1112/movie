import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  movies = [
    { name: 'Movie 1', theatre: 'Theatre A', ticketsAvailable: 100 },
    { name: 'Movie 2', theatre: 'Theatre B', ticketsAvailable: 50 }
  ];
  searchTerm = '';

  constructor() { }

  ngOnInit(): void { }

  searchMovies() {
    // Call API to search movies by name
    console.log('Searching for:', this.searchTerm);
  }
}
