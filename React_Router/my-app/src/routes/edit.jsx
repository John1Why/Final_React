// import { Form } from 'react-router-dom';

// function EditStudent() {
// 	return (
// 		<Form method="post" id="product-form">
// 			<div>
// 				<span>Фамилия:</span>
// 				<input placeholder="surname" type="text" name="surname" />
// 			</div>
// 			<div>
// 				<span>Имя:</span>
// 				<input placeholder="name" type="text" name="name" />
// 			</div>
// 			<div>
// 				<span>Год поступления:</span>
// 				<input placeholder="entry" type="text" name="entry" 
// 					/> 
// 			</div>
//             <div>
// 				<span>Специализация:</span>
// 				<input placeholder="specialization" type="text" name="specialization" 
// 					/> 
// 			</div>
// 			<p>
// 				<button type="submit">save</button>
// 			</p>
// 		</Form>
// 	);
// }

// export default EditStudent;

// _________________________________________________________________________17 Задание______________________________________________________________________________________________________________
import { Form, useLoaderData } from 'react-router-dom';
import { getStudent } from '../forStorage'
import { updateStudent } from '../forStorage';
import { redirect } from 'react-router-dom';

export async function loader({ params }) {
    const student = await getStudent(params.studentId);
    return { student };
}

export async function action({ request, 
	params }) { 
	const formData = await request.formData();
	const updates = Object.fromEntries(formData);
	await updateStudent(params.studentId, updates);
	return redirect(`/students/${params.studentId}`);;
}

function EditStudent() {
    const { student } = useLoaderData();
	return (
		<Form method="post" id="student-form">
			<div>
				<span>Фамилия:</span>
				<input placeholder="surname" type="text" name="surname" defaultValue={student.surname}/>
			</div>
			<div>
				<span>Имя:</span>
				<input placeholder="name" type="text" name="name" defaultValue={student.name}/>
			</div>
			<div>
				<span>Год поступления:</span>
				<input placeholder="entry" type="text" name="entry" defaultValue={student.entry}/> 
			</div>
            <div>
				<span>Специализация:</span>
				<input placeholder="specialization" type="text" name="specialization" defaultValue={student.specialization}/> 
			</div>
			<p>
				<button type="submit">save</button>
			</p>
		</Form>
	);
}

export default EditStudent;