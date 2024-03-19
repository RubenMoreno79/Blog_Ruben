import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  dataService = inject(DataService);
  router = inject(Router);
  dataToday: Date = new Date;


  formulario: FormGroup = new FormGroup({

    titulo: new FormControl(null, Validators.required),
    texto: new FormControl(null, Validators.required),
    autor: new FormControl(null, Validators.required),
    imagen: new FormControl(null, Validators.required),
    categoria: new FormControl('baja', Validators.required)
  });

  onSubmit() {
    this.dataService.createPost(this.formulario.value)
    this.formulario.reset()
    this.router.navigateByUrl('post')
  }

  checkError(controlName: string, errorName: string) {
    return this.formulario.get(controlName)!.hasError(errorName) &&
      this.formulario.get(controlName)!.touched;
  }


}
