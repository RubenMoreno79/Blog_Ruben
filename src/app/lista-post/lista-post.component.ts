import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Post } from '../interfaz/blog.interfaz';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-lista-post',
  standalone: true,
  imports: [],
  templateUrl: './lista-post.component.html',
  styleUrl: './lista-post.component.css'
})
export class ListaPostComponent {

  @Input() arrPost: Post[] = [];

  arrCategoria: string[] = [];

  DataService = inject(DataService);

  ngOnInit() {
    this.arrPost = this.DataService.getAll();

    this.arrCategoria = this.DataService.getFilterCategoria();
  }

  Onchange($event: any) {
    const categoria = $event.target.value;

    if (categoria === 'todas') {
      this.arrPost = this.DataService.getAll();

    } else {
      this.arrPost = this.DataService.getByCategoria(categoria)

    }


  }




}
