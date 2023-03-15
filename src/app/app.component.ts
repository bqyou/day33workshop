import { Component, ViewChild } from '@angular/core';
import { TasksComponent } from './components/tasks.component';
import { ToDoFormComponent } from './components/to-do-form.component';
import { Task } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(ToDoFormComponent)
  toDoFormComponent!: ToDoFormComponent


  tasks: Task[]= []

  selectedTask: Task | null = null
  
  selectedIdx!: number

  isSelected: boolean = false


  newTask(task: Task){
    this.tasks.push(task)
    this.isSelected=false
  }

  taskSelected(idx:number){
    this.selectedTask=this.tasks[idx]
    this.selectedIdx=idx
    this.isSelected=true
  }

  taskDelete(idx:number){
    this.tasks.splice(idx,1)
  }

  modifyTask(){
    this.tasks[this.toDoFormComponent.num] = this.toDoFormComponent.value
    this.toDoFormComponent.form.reset()
    this.isSelected=false
  }

  
}
