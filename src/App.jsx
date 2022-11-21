import Card from './components/Card'
import Card2 from './components/Card2'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Carrito from './components/Carrito'

import React from 'react'
import { useEffect, useState } from "react";
import {Route, Routes, BrowserRouter as Router, Link} from 'react-router-dom';


const App = () =>{
    const [tragos, setTragos] = useState([]);
    useEffect(() => {
        fetch('http://fondoblan.co:8080/api/products/')
           .then((response) => response.json())
           .then(
            (data) => {
                setTragos(data);
            }
        )
           .catch((err) => {
              console.log("error ");
              console.log(err.message);
           });
     }, []);

     
    return(
        
        <Router>
            <Navbar/>
            <Routes>
                <Route path = "/carrito/" element = { 
                    <Carrito nombre = "sdf" unidades = "2" precio = "50" image = "guaro.jpg" />
                }/>
            </Routes>

            <Routes>
                <Route path = "/" element = {
                    <div className="flex flex-wrap mx-24 my-12">
                        {tragos.map((item,index)=>{
                            return( 
                                <div className="sm:w-1/1 md:w-1/3 ">
                                    <Card nombre = {tragos[index].name} vol = {tragos[index].vol} 
                                          img = {tragos[index].image} precio = {tragos[index].price} ruta = {tragos[index].id}/>
                                </div>
                        )})}
                    </div>
                }/>

            </Routes>


            <Routes>
                {tragos.map((item,index)=>
                    <Route path = {"productos/" + tragos[index].id} element = {
                        <Card2 nombre = {tragos[index].name} vol = {tragos[index].vol} precio = {tragos[index].price} img = {tragos[index].image} descrip = {tragos[index].description}/>
                    }/>
                )}
            </Routes>

            <Footer/>

        </Router>


    )
}

export default App