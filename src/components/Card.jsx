import React from 'react'
import {Link} from 'react-router-dom';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Card = (props) =>{
    return(
        <div className="p-10">  
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="object-contain h-48 w-96" src={props.img}/>
      <div className="px-6 py-4">
        <Link to= {"/productos/" + props.ruta}>
          <div className="font-bold text-xl mb-2">{props.nombre}</div>
        </Link>
        <p className="text-gray-700 text-base">{props.vol}</p>
        <div class="font-bold text-md mb-5">{props.precio} $</div>
        <Link to= {"/productos/" + props.ruta} >
          <button type="button" class="mt-3 py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/> </svg></button>
        </Link>
        </div>
    </div>
  </div>
    )
}

export default Card