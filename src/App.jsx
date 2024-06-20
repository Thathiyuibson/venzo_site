import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Landingpage from "./pages/Landingpage/Landingpage";
import './app.css';
import Accessibility from "./pages/assecebility/Accessibility";
import SoftwareDevelopment from "./pages/SoftwareDevelopment/SoftwareDevelopment";
import TechOffshoring from "./pages/TechOffshoring/TechOffshoring";

const Layout = () => {
  return(
    <div className="app">
      <Outlet/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children : [
      {
        path: '/',
        element: <Landingpage/>
      },
      {
        path: '/accessibility',
        element: <Accessibility/>
      },
      {
        path: '/softwaredevelopment',
        element: <SoftwareDevelopment/>
      },
      {
        path: '/techoffshoring',
        element: <TechOffshoring/>
      },

    ]

  }
])

function App(){
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;