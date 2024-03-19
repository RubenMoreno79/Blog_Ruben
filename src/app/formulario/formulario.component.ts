import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  dataService = inject(DataService);


  formulario: FormGroup = new FormGroup({

    titulo: new FormControl(),
    texto: new FormControl(),
    autor: new FormControl(),
    imagen: new FormControl(),
    fecha: new FormControl(),
    categoria: new FormControl()
  });

  onSubmit() {
    this.dataService.createPost(this.formulario.value)
    this.formulario.reset()
    //redireccionar a la lista
  }

}
