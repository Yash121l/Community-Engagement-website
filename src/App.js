import './App.css';
import Navbar from './Pages/Components/Nav';
import { Outlet, RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import Home from './Pages/Home';
import Footer from './Pages/Components/Footer';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Str/>,
      children : [
        {
          path: '/',
          element: <Home/>,
        },
      ]
    },
    {
      path: '*',
      element: <Navigate replace to="/"/>
    }
  ])

  function Str() {
    return (
      <>
        <header className="fixed w-full"><Navbar /></header>
        <main><Outlet/></main>
        <Footer/>
      </>
    )
  }


  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;