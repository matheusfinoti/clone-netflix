import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuOpened = false;

  listTitles = [{
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galáxia 1',
    relevance: 98,
    age: 12,
    parts: 2,
    categories: ['Horrível', 'Filmes que dão ansia', 'Não vale o ingresso']
  }, {
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galáxia 122',
    relevance: 100,
    age: 16,
    parts: 4,
    categories: ['ghsthst', 'aefafefa', 'aeae']
  }, {
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galáxia 33',
    relevance: 77,
    age: 18,
    parts: 5,
    categories: ['srhrsth', 'Filme de Idiota', 'Só chapado pra ver']
  }];

  setMenuState(state: boolean) {
    this.menuOpened = state; 
  }

}