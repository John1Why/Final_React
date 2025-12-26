// _________________________________________________________________________5 Задание______________________________________________________________________________________________________________

// function Student() {
// 	const student = {
// 		name: "Иван",
// 		surname: "Семенихин",
// 		entry: 2023,
//         specialization: "Веб-разработчик"
// 	};
//     return <div>
//         <h2></h2>
//         <p>Фамилия:{student.surname}</p>
//         <p>Имя:{student.name}</p>
//         <p>Год поступления:{student.entry}</p>
//         <p>Специализация:{student.specialization}</p>
//     </div>;
// }

// export default Student;

// _________________________________________________________________________15 Задание______________________________________________________________________________________________________________
// import { getStudent } from '../forStorage';
// import { useLoaderData } from 'react-router-dom';

// export async function loader({ params }) {
// 	const student = await getStudent(params.studentId);
// 	return { student };
// }
// function Student() {
//     const { student } = useLoaderData();
//     return <div>
//         <h2>Студентик</h2>
//         <p>Фамилия:{student.surname ? student.surname : <i>The unnamed student</i>}</p>
//         <p>Имя:{student.name ? student.name : <i>unknown</i>}</p>
//         <p>Год поступления:{student.entry ? student.entry : <i>unknown</i>}</p>
//         <p>Специализация:{student.specialization ? student.specialization : <i>unknown</i>}</p>
//     </div>;
// }

// export default Student;

// _________________________________________________________________________16 Задание______________________________________________________________________________________________________________
import { getStudent } from '../forStorage';
import { useLoaderData } from 'react-router-dom';
import { Form } from 'react-router-dom';

export async function loader({ params }) {
	const student = await getStudent(params.studentId);
	return { student };
}
function Student() {
    const { student } = useLoaderData();
    return <div>
        <h2>Студентик</h2>
        <p>Фамилия:{student.surname ? student.surname : <i>The unnamed student</i>}</p>
        <p>Имя:{student.name ? student.name : <i>unknown</i>}</p>
        <p>Год поступления:{student.entry ? student.entry : <i>unknown</i>}</p>
        <p>Специализация:{student.specialization ? student.specialization : <i>unknown</i>}</p>
        <div id="control">
            <Form action="edit" >
                <button type="submit">edit</button>
            </Form>
            <Form method="post" action="delete" onSubmit={(event) => {if (!confirm('Do you want to delete this product?')) {event.preventDefault();} }}>
                <button type="submit">delete</button>
            </Form>
        </div>
    </div>;
}

export default Student;