import { Routes } from '@angular/router';
import { ListaPostComponent } from './lista-post/lista-post.component';
import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/post' },

    { path: 'post', component: ListaPostComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: '**', redirectTo: '/post' }
];
