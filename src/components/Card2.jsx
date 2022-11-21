import React from 'react'
import {Link} from 'react-router-dom';

const Card2 = (props) =>{

    return(
    <div class="px-60 py-12">
    <div class=" w-full lg:max-w-full lg:flex ">
      <img class="object-contain h-80 w-96" src = {props.img}>
      </img>
      <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
            <div className="mt-3 font-bold text-4xl mb-2">{props.nombre}</div>
            <p className="mt-3 text-gray-700 text-base">{props.vol}</p>
            <div class="mt-3 font-bold text-md ">{props.precio} $</div>
        </div>
        <div >
            <Link to= "/carrito" state = {{ nombre: props.nombre, precio: props.precio, img: props.img}}>
                <button type="button" class=" py-2 px-5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16"> <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/> </svg></button>
            </Link>
        </div>
      </div>
    </div>
    <hr class = "my-16" />
    <h2 class = "text-xl font-bold my-2">Descripcion: </h2>
    <p>{props.descrip}</p>
  </div>
    )
}

export default Card2