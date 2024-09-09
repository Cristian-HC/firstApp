import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  
  @Input() todoList: string[] = [];
  @Output() clickedItem = new EventEmitter<string>();

  clickItem(item:string){
    this.clickedItem.emit(item);
  }
}
