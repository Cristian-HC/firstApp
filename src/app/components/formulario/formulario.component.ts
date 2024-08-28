import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  public myForm: FormGroup;
  public usuarios: User[] = [];
  
  constructor(private fb: FormBuilder){
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  public onSubmit():any{
      if(this.myForm.valid){
        this.usuarios.push(new User(this.myForm.get('name')?.value, this.myForm.get('email')?.value, this.myForm.get('password')?.value))
      }
  }
}

class User{
  name:string;
  email:string;
  password:string;

  constructor(name:string, email:string, password:string){
    this.name = name;
    this.email = email;
    this.password = password;
  }
}