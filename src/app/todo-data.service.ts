import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TodoDataService {

	constructor(
		private api: ApiService
	) {

	}

	// simulate POST /TodoDataService
	addTodo(todo: Todo): Observable<Todo> {
		return this.api.createTodo(todo);
	}

	// simulate DELETE /todos/:id
	deleteTodoById(todoId: number): Observable<Todo> {
		return this.api.deleteTodoById(todoId);
	}

	// simulate PUT /todos/:id
	updateTodo(todo: Todo): Observable<Todo> {
		return this.api.updateTodo(todo);
	}

	// simulate GET /todos
	getAllTodos(): Observable<Todo[]> {
		return this.api.getAllTodos();
	}

	// simulate GET /todos/:id
	getTodoById(todoId: number): Observable<Todo> {
		return this.api.getTodoById(todoId);
	}

	// toggle todo complete
	toggleTodoComplete(todo:Todo){
		todo.complete = !todo.complete;
    	return this.api.updateTodo(todo);
	}

}
