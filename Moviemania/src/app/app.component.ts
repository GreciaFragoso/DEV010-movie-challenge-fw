import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Moviemania';
  http = inject(HttpClient); // patrón de inyección de dependencias, instancia a toda la app

  changeTitle() {
    this.title = 'changed';
  }

  // ciclo de vida de un componente, trigger del componente renderizado
  // ngOnInit() {
  //   this.http.get();
  // }
}
