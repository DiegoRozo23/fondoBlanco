import React from 'react'
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

const Carrito = (props) =>{
    const [count, setCount] = useState(1);
    const location = useLocation();
    const nombre = location.state?.nombre;
    const precio = location.state?.precio;
    const img = location.state?.img;

    const aumentar = event => {
        setCount(count + 1);
      };

    const decrementar = event => {
        if(count > 1)setCount(count -1);
    };

    const eliminar = event => {

    }



    return(
    <div>
        <div className='flex flex-wrap mx-40 my-20'>
            <div className='sm:w-1/2'>
            <h4 className='text-2xl font-bold mb-10'>Lista de productos</h4>
            <div className='flex flex wrap'>
                <img className="sm:w-1/2 object-contain h-50 w-50 max-h-50 mr-8" src={img} />
                    <div className="sm:w-1/2 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <div className="mt-3 font-bold text-2xl mb-2">{nombre}</div>
                            <p className="mt-3 font-bold text-gray-700 text-base">{count}</p>
                            <div className="mt-3  text-md mb-5">{precio} $ por unidad</div>
                        </div>
                        <div className="flex items-center">
                            <button onClick={aumentar} type="button" class="mt-3 mr-3 py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Añadir</button>
                            <button onClick={decrementar} type="button" class="mt-3 py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Quitar</button></div>
                    </div>
                </div>
            <div/>
        </div>
            <div className='sm:w-1/2 '>
                <h4 className='text-2xl font-bold ml-40 my-10'>Carrito</h4>
                <h3 className='fond bold ml-40 mt-10'>Total: {precio*count} $</h3>
                <p className="mt-3 text-gray-700 text-base ml-40 mb-5">Iva incluido</p>
                <button type="button " class="ml-40 my-10 mt-3 py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Facturar</button>
            </div>
        </div>
    </div>
    )
}

export default Carrito