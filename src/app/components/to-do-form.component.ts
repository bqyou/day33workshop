import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Task } from '../models';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit, OnChanges {

  form!:FormGroup

  constructor(private fb: FormBuilder){}

  @Input()
  task: Task | null = null

  @Input()
  idx!: number 
  
  @Output()
  onNewTask= new Subject<Task>()

  ngOnInit(): void {
      this.form = this.fb.group({
        description: this.fb.control<string>('',[Validators.required]),
        priority: this.fb.control<string>('',[Validators.required]),
        dueDate: this.fb.control<Date>(new Date(), [Validators.required])
      })
  }

  ngOnChanges(change: SimpleChanges){
    const t: Task = change['task'].currentValue
      const taskDes = this.form.get('description') as FormControl
      const taskPrio = this.form.get('priority') as FormControl
      const taskDueDate = this.form.get('dueDate') as FormControl
      taskDes.setValue(t.description)
      taskPrio.setValue(t.priority)
      taskDueDate.setValue(t.dueDate)
  }

  addTask(){
    const value = this.form.value as Task
    this.onNewTask.next(value)
    this.form.reset()
  }

  get value(): Task{
    return this.form.value as Task
  }

  get invalid(): boolean{
    return this.form.invalid
  }

  get num(): number{
    return this.idx
  }






}
