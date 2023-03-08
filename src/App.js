
import './App.css';
import{createBrowserRouter,  RouterProvider}from"react-router-dom"
import Register from './pages/Register';
import Login from './pages/Login';
import Nav from './pages/Navigation';
import Navigation from './pages/Navigation';
function App() {

const router=createBrowserRouter([{
  path:"/",
  element:<div>
   <Navigation></Navigation>
    </div>
},
{
  path:"/login",
  element:<Login></Login>
},
{
  path:"/register",
  element:<Register></Register>
    
  
}
])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
