import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {createRoutesFromElements, createBrowserRouter,RouterProvider, Route} from 'react-router-dom';
import ErrorPage404 from './error-page-404';
// import Product from './routes/product';
// import Student from './routes/student';
import { Outlet } from 'react-router-dom';
import Root, { loader as rootLoader, action as rootAction} from './routes/root';
import { action as deleteAction } from './routes/delete';

import Product, {loader as productLoader} from './routes/product';
import Student, {loader as studentLoader} from './routes/student';

// import EditStudent, { loader as EditStudentLoader } from './routes/edit';

import EditStudent, {loader as EditStudentLoader,action as editAction} from './routes/edit';
import Index from './routes/index';
// _________________________________________________________________________1 Задание______________________________________________________________________________________________________________
// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <div>I'm number one in React!</div>,
// 	},
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
// 	<React.StrictMode>
//     <RouterProvider router={router} />
// 	</React.StrictMode>
// );

// _________________________________________________________________________2 Задание______________________________________________________________________________________________________________

// const router = createBrowserRouter(
// 	createRoutesFromElements(
// 		<Route
// 			path = '/'
// 			element = {<div>I'm number one in React!</div>}
// 		/>
// 	)
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
// 	<React.StrictMode>
//     <RouterProvider router={router} />
// 	</React.StrictMode>
// );

// _________________________________________________________________________3 Задание______________________________________________________________________________________________________________

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <Root />,
// 	},
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
// 	<React.StrictMode>
//     <RouterProvider router={router} />
// 	</React.StrictMode>
// );

// _________________________________________________________________________4 Задание______________________________________________________________________________________________________________

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <Root />,
// 		errorElement: <ErrorPage404 />,
// 	},
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
// 	<React.StrictMode>
//     <RouterProvider router={router} />
// 	</React.StrictMode>
// );

// _________________________________________________________________________5 Задание______________________________________________________________________________________________________________

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <Root />,
// 		errorElement: <ErrorPage404 />,
// 	},
//   {
// 	  path: 'products/:productId',
// 	  element: <Product />,
//   },
//   {
// 	  path: '/students/:studentId',
// 	  element: <Student />,
//   }
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
// 	<React.StrictMode>
//     <RouterProvider router={router} />
// 	</React.StrictMode>
// );

// _________________________________________________________________________6 Задание______________________________________________________________________________________________________________

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <Root />,
// 		errorElement: <ErrorPage404 />,
//     children: [
//       {
//         path: 'products/:productId',
//         element: <Product/>
//       },
//       {
//         path: '/students/:studentId',
//         element: <Student />,
//       }
//     ]
// 	},
//   {
// 	  path: 'products/:productId',
// 	  element: <Product />,
//   },
//   {
// 	  path: '/students/:studentId',
// 	  element: <Student />,
//   }
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
// 	<React.StrictMode>
//     <RouterProvider router={router} />
// 	</React.StrictMode>
// );

// _________________________________________________________________________fin Задание______________________________________________________________________________________________________________
const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage404 />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage404 />,
        children: [ 
          { index: true, element: <Index /> }, 
          {path: 'students/:studentId', element: <Student />, loader: studentLoader,},
          {path: 'students/:studentId/edit', element: <EditStudent />, loader: EditStudentLoader, action: editAction},
          {path: 'students/:studentId/delete',action: deleteAction,}
        ]
      },



      { index: true, element: <Index /> },
      {
        path: 'products/:productId',
		    element: <Product />,
		    loader: productLoader
      },
      {
        path: '/students/:studentId',
        element: <Student />,
        loader: studentLoader
      },
      {
        path: '/students/:studentId/edit',
        element: <EditStudent />,
        loader: EditStudentLoader,
        action: editAction,
      },
      {
        path: 'students/:studentId/delete',
        action: deleteAction,
      },
    ]
	},
  {
	  path: 'products/:productId',
	  element: <Product />,
  },
  {
	  path: '/students/:studentId',
	  element: <Student />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <RouterProvider router={router} />
	</React.StrictMode>
);
