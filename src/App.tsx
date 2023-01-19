import React from 'react';
import './App.css';
import {createHashRouter,RouterProvider} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import MainLayOut from './Pages/MainLayOut';
import { ShoppingCartContextProvider } from './Context/ShoppingCartContext';

function App() {

  const router = createHashRouter([
    {path:'/',element:<MainLayOut/>,children:[
      {path:'/',element:<Home/>},
      {path:'home',element:<Home/>},
      {path:'about',element:<About/>},
    ]}
    
  ])
  

  return (
    <>
<ShoppingCartContextProvider>
    <RouterProvider router={router}/>
    </ShoppingCartContextProvider>
    </>
  );
}

export default App;
