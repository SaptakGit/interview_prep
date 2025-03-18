import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import About from "./components/About";
import Header from './components/Header';


const Layout = () =>{
  return(
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {path:"/", element:<Dashboard/>},
      {path:"/about", element:<About/>}
    ]
  }
])

function App() {
  return (
      <RouterProvider router={router}></RouterProvider>
  );
}


export default App;
