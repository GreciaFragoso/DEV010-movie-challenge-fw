import { Component, Input } from '@angular/core';
import { Movie } from './../../models/movie.model';

@Component({
  selector: 'app-movie', // se usa para llamarlo en el contenedor padre
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  @Input() movie: Movie = { // movie!: Movie; por si no lo encuentra y no quiero inicializar
    id: 0,
    title: 'The Neon Demon',
    genre: 'Thriller',
  }; // inicializar es buena práctica para renderzar por defecto
}
