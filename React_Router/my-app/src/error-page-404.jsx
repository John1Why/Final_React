//_________________________________________________________________________4 Задание______________________________________________________________________________________________________________


import { useRouteError } from 'react-router-dom';

function ErrorPage404() {
	const error = useRouteError();
	console.error(error);
    return (
	<div>
		<h1>Ошибка короче </h1>
		<h2>404 ошибочка</h2>
		<p>
			<i>{error.statusText}</i>
		</p>
		<p>
			<i>{error.data}</i>
		</p>
	</div>
);

}

export default ErrorPage404;