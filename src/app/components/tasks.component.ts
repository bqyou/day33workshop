import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from '../models';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  
  @Input()
  tasks= [] as Task[]

  @Output()
  onSelected= new Subject<number>

  @Output()
  toDelete = new Subject<number>


  selected(idx:number){
    this.onSelected.next(idx)
  }

  delete(idx:number){
    this.toDelete.next(idx)
  }
}
