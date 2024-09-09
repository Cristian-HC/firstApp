import { Component} from '@angular/core';
import { Task } from '../../models/Task';
import { AdminTaskService } from '../../services/admin-task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {

  tasks: any[] = [];

  constructor(private taskService: AdminTaskService) {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((response: any) => {
      this.tasks = response;
      console.log('Tareas cargadas:', this.tasks); 
    }, (error) => {
      console.error('Error al cargar las tareas:', error);  
    });
  }

  createTask() {
    const newTask = { userId: 1, title: 'Nueva tarea personalizada', completed: false };
    this.taskService.createTask(newTask).subscribe((response) => {
      console.log('Tarea creada:', response);
      this.tasks.push(response);  
    }, (error) => {
      console.error('Error al crear la tarea:', error);  
    });
  }

  deleteTask(id: number) {
    console.log('Intentando eliminar la tarea con ID:', id); 
    this.taskService.deleteTask(id).subscribe(() => {
      console.log('Tarea eliminada localmente');
  
      this.tasks = this.tasks.filter(task => task.id !== id);  
    }, (error) => {
      console.error('Error al eliminar la tarea:', error); 
    });
  }
}
