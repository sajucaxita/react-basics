
    
import React from 'react';
import Homepage from './src/pages/Homepage';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import About from './src/pages/About';
import User from './src/pages/User';
import Error from './src/pages/Error';
import Header from './src/Partials/Header';
import Footer from './src/Partials/Footer';
import './global.css'
import ProductDetails from './src/pages/ProductDetails';

const App = () => {

    const Home = ()=>  (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )

    const Admin = ()=>(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )




    const HomeLayout = createBrowserRouter([
        {
            path:'/',
            element:<Home/>,
            
            children:[
                {
                    path:'/',
                    element:<Homepage/>
                },
                {
                    path:'/about',
                    element:<About/>
                },
                {
                    path:'/product/:id',
                    element:<ProductDetails/>
                }
            ],
            errorElement:<Error/>
        },
        {
            path:'/admin',
            element:<Admin/>,
            
            children:[
                {
                    path:'/admin',
                    element:<Homepage/>
                },
                {
                    path:'/admin/about',
                    element:<About/>
                }
            ],
            errorElement:<Error/>
        }
    ])
    


    return (
        <RouterProvider router={HomeLayout}/>
    );
}

export default App;
