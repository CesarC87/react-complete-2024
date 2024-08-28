import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';
import RootLayout from './Layout/RootLayout';
import ErrorPage from './pages/ErrorPage';
import ProductDetail from './pages/ProductDetail';


// const routesV1 = createRoutesFromElements(
//   <Route>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/products' element={<Products/>}/>
//   </Route>
// )

const routesV2 = [
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      { path: '/', element: <Home/>},
      { path: '/products', element: <Products/>},
      { path: '/products/:id', element: <ProductDetail/>},
    ],
    errorElement: <ErrorPage/>
  }
]

const router = createBrowserRouter(routesV2)

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
