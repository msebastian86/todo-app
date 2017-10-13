export class Todo {
	id: number;
	title: string = '';
	complete: boolean = false;

	// specify property values during instatntiation
	constructor(values: Object = {}){
		Object.assign(this, values);
	}

}
