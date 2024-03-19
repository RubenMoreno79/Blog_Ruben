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
    this.arrPost.push(nuevoPost);

  }


  getByCategoria(categoria: string): Post[] {
    return this.arrPost.filter(post => post.categoria === categoria)
  }

  getFilterCategoria(): string[] {
    return [...new Set(this.arrPost.map(nuevoPost => nuevoPost.categoria))]
  }


}
