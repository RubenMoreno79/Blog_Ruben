import { Injectable, } from '@angular/core';
import { Post } from '../interfaz/blog.interfaz';
import { POSTS } from '../data/post.db';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private arrPost: Post[] = POSTS;


  getAll(): Post[] {
    return this.arrPost
  }


  createPost(nuevoPost: Post) {
    const fechaActual = new Date();

    const fechaFormateada = fechaActual.getDate() + '/' + (fechaActual.getMonth() + 1) + '/' + fechaActual.getFullYear();

    nuevoPost.fecha = fechaFormateada;

    if (!nuevoPost.categoria) {
      nuevoPost.categoria = 'Baja'
    }
    this.arrPost.unshift(nuevoPost);
  }

  getByCategoria(categoria: string): Post[] {
    return this.arrPost.filter(post => post.categoria.toLowerCase() === categoria.toLowerCase())
  }

  getFilterCategoria(): string[] {
    return [...new Set(this.arrPost.map(nuevoPost => nuevoPost.categoria))]
  }


}
