import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListaPostComponent } from './lista-post/lista-post.component';
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaPostComponent, FormularioComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blog';
}
