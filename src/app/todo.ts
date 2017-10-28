export class Todo {
	id: number;
  	title = '';
  	complete = false;

	// specify property values during instatntiation
	constructor(values: Object = {}){
		Object.assign(this, values);
	}

}
