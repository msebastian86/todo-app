import { Component, OnInit  } from '@angular/core';
import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent implements OnInit {

	// title = 'app works!';

	todos: Todo[] = [];

	constructor(
		private todoDataService: TodoDataService
	) {
	}

	// We then use the ngOnInit() method to subscribe to this.todoDataService.getAllTodos() and when a value comes in, we assign it to this.todos, overwriting its initial value of an empty array.
	public ngOnInit() {
	    this.todoDataService
	     	.getAllTodos()
	     	.subscribe(
	        	(todos) => {
	          		this.todos = todos;
	        	}
	      	);
	}

	onAddTodo(todo) {
	  this.todoDataService
	    .addTodo(todo)
	    .subscribe(
	      	(newTodo) => {
	        	this.todos = this.todos.concat(newTodo);
	      	}
	    );
	}

	onToggleTodoComplete(todo) {
	    this.todoDataService
	      .toggleTodoComplete(todo)
	      .subscribe(
	        (updatedTodo) => {
	        	todo = updatedTodo;
	        }
	      );
	  }

	onRemoveTodo(todo) {
	    this.todoDataService
	      .deleteTodoById(todo.id)
	      .subscribe(
	        (_) => {
	        	this.todos = this.todos.filter((t) => t.id !== todo.id);
	        }
	      );
	  }

}	