import { Outlet, Link, useLoaderData } from 'react-router-dom';
import { getProducts } from '../forStorage'
import { getStudents } from '../forStorage'
import { createProduct } from '../forStorage';
import { createStudent } from '../forStorage';
import { Form, redirect  } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';

export async function loader() {
	const products = await getProducts();
    const students = await getStudents();
    return { products, students};
}

export async function action() {
	const product = await createProduct();
	const student = await createStudent();
	return redirect( `/students/${student.id}/edit` );
}



// _________________________________________________________________________3 Задание______________________________________________________________________________________________________________
// function Root() {
// 	return <div>I'm number one in React!</div>;
// }

// export default Root;
// _________________________________________________________________________4 Задание______________________________________________________________________________________________________________
// function Root() {
// 	return (
// 		<nav>
// 			<a href={`/products/1`}>Product1</a>
// 			<a href={`/products/2`}>Product2</a>
//             <a href={`/students/1`}>Student1</a>
// 			<a href={`/students/2`}>Student2</a>
// 		</nav>
// 	);
// }

// export default Root;
// _________________________________________________________________________5 Задание______________________________________________________________________________________________________________

// function Root() {
// 	return (
//     <div id="main">
// 		<nav>
// 			<a href={`/products/1`}>Product1</a>
// 			<a href={`/products/2`}>Product2</a>
//             <a href={`/students/1`}>Student1</a>
// 			<a href={`/students/2`}>Student2</a>
// 		</nav>
//         <div id="product">
//             <Outlet/>
//         </div>
//     </div>
// 	);
// }

// export default Root;

// _________________________________________________________________________7 Задание______________________________________________________________________________________________________________

// function Root() {
// 	return (
//     <div id="main">
// 		<nav>
// 			<Link to={`/products/1`}>Product1</Link>
// 			<Link to={`/products/2`}>Product2</Link>
//          <Link to={`/students/1`}>Student1</Link>
// 			<Link to={`/students/2`}>Student2</Link>
// 		</nav>
//         <div id="product">
//             <Outlet/>
//         </div>
//     </div>
// 	);
// }

// export default Root;
// _________________________________________________________________________8 Задание______________________________________________________________________________________________________________

// function Root() {

// 	const { products } = useLoaderData();
// 	const { students } = useLoaderData();
// 	return (
// 		<div id="main">
// 			{products.length ? (
// 				<nav>
// 					{products.map((product) => (
// 						<Link key={product.id} to={`products/${product.id}`}>
// 							{product.name ? product.name : <i>
// 								Unnamed</i>}
// 				 		</Link>
// 					))}
// 				</nav>
// 			) : (
// 				<p><i>no products here ...</i></p>

// 								) }
// 			{students.length ? (
// 				<nav>
// 					{students.map((student) => (
// 						<Link key={student.id} to={`students/${student.id}`}>
// 							{student.name ? student.name : <i>Unnamed</i>}
// 						</Link>
// 					))}
// 				</nav>
// 			) : (
// 				<p><i>no students here ...</i></p>
// 			)}
// 			<div id="product">
// 				<Outlet />
// 			</div>
// 		</div>
// 	);
// }
// export default Root;


// _________________________________________________________________________9 Задание______________________________________________________________________________________________________________

// function Root() {

// 	const { products } = useLoaderData();
// 	const { students } = useLoaderData();
// 	return (
// 		<div id="main">
// 			<div id="menu">
// 				<Form method="post">
// 					<button type="submit">add product</button>
// 					<button type="submit">add student</button>
// 				</Form>
// 				{products.length ? (
// 				<nav>
// 					{products.map((product) => (
// 					<Link key={product.id} to={`products/${product.id}`}>
// 						{product.name ? product.name : <i>Unnamed</i>}
// 					</Link>
// 					))}
// 				</nav>
// 				) : (
// 				<p>
// 					<i>no products here ...</i>
// 				</p>
// 				)}{students.length ? (
// 				<nav>
// 					{students.map((student) => (
// 						<Link key={student.id} to={`students/${student.id}`}>
// 							{student.name ? student.name : <i>Unnamed</i>}
// 						</Link>
// 					))}
// 				</nav>
// 			) : (
// 				<p><i>no students here ...</i></p>
// 			)}
// 			</div>

// 			<div id="product">
// 				<Outlet />
// 			</div>
// 		</div>
// 	);
// }
// export default Root;

// _________________________________________________________________________10 Задание______________________________________________________________________________________________________________

// function Root() {

// 	const { products } = useLoaderData();
// 	const { students } = useLoaderData();
// 	return (
// 		<div id="main">
// 			<div id="menu">
// 				<Form method="post">
// 					<button type="submit">add product</button>
// 					<button type="submit">add student</button>
// 				</Form>
// 				{products.length ? (
// 				<nav>
// 					{products.map((product) => (
// 					<Link key={product.id} to={`products/${product.id}`}>
// 						{product.name ? product.name : <i>Unnamed</i>}
// 					</Link>
// 					))}
// 				</nav>
// 				) : (
// 				<p>
// 					<i>no products here ...</i>
// 				</p>
// 				)}{students.length ? (
// 				<nav>
// 					{students.map((student) => (
// 						<Link key={student.id} to={`students/${student.id}`}>
// 							{student.name ? student.name : <i>The unnamed student</i>}
// 						</Link>
// 					))}
// 				</nav>
// 			) : (
// 				<p><i>no students here ...</i></p>
// 			)}
// 			</div>

// 			<div id="product">
// 				<Outlet />
// 			</div>
// 		</div>
// 	);
// }
// export default Root;
// _________________________________________________________________________19 Задание______________________________________________________________________________________________________________

// function Root() {

// 	const { products } = useLoaderData();
// 	const { students } = useLoaderData();
// 	return (
// 		<div id="main">
// 			<div id="menu">
// 				<Form method="post">
// 					<button type="submit">add product</button>
// 					<button type="submit">add student</button>
// 				</Form>
// 				{products.length ? (
// 				<nav>
// 					{products.map((product) => (
// 					<Link key={product.id} to={`products/${product.id}`}>
// 						{product.name ? product.name : <i>Unnamed</i>}
// 					</Link>
// 					))}
// 				</nav>
// 				) : (
// 				<p>
// 					<i>no products here ...</i>
// 				</p>
// 				)}{students.length ? (
// 				<nav>
// 					{students.map((student) => (
// 						<Link key={student.id} to={`students/${student.id}`}>
// 							{student.name ? student.name : <i>The unnamed student</i>}
// 						</Link>
// 					))}
// 				</nav>
// 			) : (
// 				<p><i>no students here ...</i></p>
// 			)}
// 			</div>

// 			<div id="product">
// 				<Outlet />
// 			</div>
// 		</div>
// 	);
// }
// export default Root;

// _________________________________________________________________________23 Задание______________________________________________________________________________________________________________


// function Root() {

// 	const { products } = useLoaderData();
// 	const { students } = useLoaderData();
// 	return (
// 		<div id="main">
// 			<div id="menu">
// 				<Form method="post">
// 					<button type="submit">add product</button>
// 					<button type="submit">add student</button>
// 				</Form>
// 				{products.length ? (
// 				<nav>
// 					{products.map((product) => (
// 					<Link key={product.id} to={`products/${product.id}`}>
// 						{product.name ? product.name : <i>Unnamed</i>}
// 					</Link>
// 					))}
// 				</nav>
// 				) : (
// 				<p>
// 					<i>no products here ...</i>
// 				</p>
// 				)}{students.length ? (
// 				<nav>
// 					{students.map((student) => (
// 						<NavLink key={student.id} to={`students/${student.id}`} className={({ isActive, isPending }) => isActive ? 'active' : isPending ? 'loading' : ''}>
// 							{student.name ? student.name : <i>The unnamed student</i>}
// 						</NavLink>
// 					))}
// 				</nav>
// 			) : (
// 				<p><i>no students here ...</i></p>
// 			)}
// 			</div>

// 			<div id="product">
// 				<Outlet />
// 			</div>
// 		</div>
// 	);
// }
// export default Root;

// _________________________________________________________________________24 Задание______________________________________________________________________________________________________________

function Root() {

	const { products } = useLoaderData();
	const { students } = useLoaderData();
	const navigation = useNavigation();
	return (
		<div id="main">
			<div id="menu">
				<Form method="post">
					<button type="submit">add product</button>
					<button type="submit">add student</button>
				</Form>
				{products.length ? (
				<nav>
					{products.map((product) => (
					<Link key={product.id} to={`products/${product.id}`}>
						{product.name ? product.name : <i>Unnamed</i>}
					</Link>
					))}
				</nav>
				) : (
				<p>
					<i>no products here ...</i>
				</p>
				)}{students.length ? (
				<nav>
					{students.map((student) => (
						<NavLink key={student.id} to={`students/${student.id}`} className={({ isActive, isPending }) => isActive ? 'active' : isPending ? 'loading' : ''}>
							{student.name ? student.name : <i>The unnamed student</i>}
						</NavLink>
					))}
				</nav>
			) : (
				<p><i>no students here ...</i></p>
			)}
			</div>

			<div id="product" className={navigation.state === 'loading' ? 'loading' : ''}>
				<Outlet />
			</div>
		</div>
	);
}
export default Root;
