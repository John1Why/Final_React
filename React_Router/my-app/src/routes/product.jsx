// _________________________________________________________________________15 Задание______________________________________________________________________________________________________________
import { getProduct } from '../forStorage';
import { useLoaderData } from 'react-router-dom';
import { Form } from 'react-router-dom';

export async function loader({ params }) {
	const product = await getProduct(params.productId);
	return { product };
}


function Product() {
    const { product } = useLoaderData();
    return (
	<div>
		<h2>Product page</h2>
		<p>Name: {product.name ? product.name : <i>unnamed</i>}</p> 
		<p>Cost: {product.cost ? product.cost : <i>unknown</i>}</p> 
		<p>Amount: {product.amount ? product.amount : <i>unknown</i>}</p> 
		<Form action="edit">
			<button type="submit">edit</button>
		</Form>
	</div>
	
);
}

export default Product;