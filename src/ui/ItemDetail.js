import React, { useState, useEffect } from 'react'
import '../App.css'; 
import axios from 'axios';


function ItemDetail({match}) {

    useEffect(() => {
        const fetchItem = async () => {
            const result = await axios(
                `https://5f33e9c1cfaf5a001646b758.mockapi.io/api/v0/product/${match.params.id}`   
            )
            console.log(result.data)
            setItem(result.data);
        }
        fetchItem();
    },[]);
    const [item,setItem] = useState({});
    
    return (
        <div className='item-details'>
         <h2>{item.name}</h2>
         <ul>
             <li><strong>Description: </strong>{item.description}</li>
             <li><strong>Product Type: </strong>{item.product_type}</li>
             <li><strong>Price: </strong>{item.price}</li>
         </ul>
        </div>
    )
}


export default ItemDetail