import localforage from 'localforage';
import { nanoid } from 'nanoid'


export async function getProducts() {
	await someNetwork();
	let products = await localforage.getItem('products');
	if (!products) products = [];
	return products;
}

export async function getStudents() {
	await someNetwork();
	let students = await localforage.getItem('students');
	if (!students) students = [];
	return students;
}

let someCache = {};

async function someNetwork(key) {
	if (!key) {
		someCache = {};
	}

	if (someCache[key]) {
		return;
	}

	someCache[key] = true;

	return new Promise((res) => {
		setTimeout(res, Math.random() * 700);
	});
}


// _________________________________________________________________________11 Задание______________________________________________________________________________________________________________
export async function createProduct() {
	await someNetwork();
	let id = nanoid(6);
	let product = { id };
	let products = await getProducts();
	products.unshift(product);
	await setProducts(products);
	return product;
}

export async function createStudent() {
	await someNetwork();
	let id = nanoid(6);
	let student = { id };
	let students = await getStudents();
	students.unshift(student);
	await setStudents(students);
	return student;
}

function setProducts(products) {
	return localforage.setItem('products', products);
}

function setStudents(students) {
	return localforage.setItem('students', students);
}
// _________________________________________________________________________15 Задание______________________________________________________________________________________________________________
export async function getProduct(id) {
	await someNetwork(`product:${id}`);
	let products = await localforage.getItem('products');
	let product = products.find((product) => product.id === id);
	return product ?? null;
}

export async function getStudent(id) {
	await someNetwork(`student:${id}`);
	let students = await localforage.getItem('students');
	let student = students.find((student) => student.id === id);
	return student ?? null;
}


export async function updateStudent(id, updates) { 
	await someNetwork();
	let students = await localforage.getItem('students');
	let student = students.find((student) => student.id === id); 
	if (!student) throw new Error('No student found for this', id); 
	Object.assign(student, updates);
	await setStudents(students);
	return student;
}

// _________________________________________________________________________25 Задание______________________________________________________________________________________________________________
export async function deleteStudent(id) {
	let students = await localforage.getItem('students');
	let index = students.findIndex((student) => student.id 
		=== id); 
	if (index > -1) {
		students.splice(index, 1);
		await setStudents(students);
		return true;
	}
	return false;
}