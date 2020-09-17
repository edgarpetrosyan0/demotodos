import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Todo } from './models/todo';
import { CreateTodo, DeleteTodo, SetCurrentFilter, ToggleTodo } from './models/todo.actions';
import { Observable } from 'rxjs';
import { TodoState } from '../todo.state';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  newTodo: string;
  todosNoLibrary: any;
  todoObj: any;
  isAscendic = true;
  statusSelected = 0;
  selected = false;
  todosArr = [];

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {
    this.todoForm = fb.group({
      descriptionCtrl: ''
    });

    // no NGXS
    this.newTodo = '';
    this.todosNoLibrary = [];
  }

  // NGXS
  todoForm: FormGroup;
  @Select(TodoState.numUncheckedTodos)
  uncheckedTodos: Observable<number>;

  @Select(TodoState.todos)
  todos: Observable<Todo[]>;


  ngOnInit(): void {

  }

  // no NGXS

  addItem(event) {
    if (this.newTodo.length === 0) {
      return;
    }

    this.todoObj = {
      newTodo: this.newTodo,
      completed: false,
    };

    this.todosNoLibrary.push(this.todoObj);
    this.newTodo = '';
    event.preventDefault();
  }

  deleteItem(index: number) {
    this.todosNoLibrary.splice(index, 1);
  }

  showAllCompleted(index) {
    this.selected = true;
    this.statusSelected = index;
    this.todosArr = this.todosNoLibrary.filter((item) => item.completed === true);
  }
  showAllActive(index) {
    this.selected = true;
    this.statusSelected = index;
    this.todosArr = this.todosNoLibrary.filter((item) => item.completed === false);
  }

  showAllItems(index) {
    this.selected = false;
    this.statusSelected = index;
  }


  // NGXS
   submitTodo() {
    const { descriptionCtrl } = this.todoForm.value;
    this.store.dispatch(new CreateTodo(descriptionCtrl));
  }

  toggleTodo(todo: Todo) {
    this.store.dispatch(new ToggleTodo(todo));
  }

  deleteTodo(todo: Todo) {
    this.store.dispatch(new DeleteTodo(todo));
  }
}
