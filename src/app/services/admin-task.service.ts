import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminTaskService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {
    console.log('TaskService inicializado');  // Debug para verificar la inyecciÃ³n
  }

  createTask(task: { userId: number; title: string; completed: boolean }) {
    return this.http.post(this.apiUrl, task);
  }

  deleteTask(id: number) {
    console.log("Llamada al servicio para eliminar la tarea con ID: ${id}");
    return this.http.delete(this.apiUrl+"/${id}");
  }

  getTasks() {
    return this.http.get(this.apiUrl);
  }
}
