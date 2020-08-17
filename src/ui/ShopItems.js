import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'


 const ShopItems = (props) =>  {
    

        
    return (
            props.items.map(item => (
                <div className = 'card'>

                            <h1>
                             <Link to = {`/shop/${item.id}`} key = {item.id}>{item.name}</Link>
                            </h1>
                             <div className='item-pic'></div>
                            
                             <button onClick={() => props.increment(item.id)}> + </button>
                         
                             {item.count}
                         
                             <button onClick={() => props.decrement(item.id)}> - </button>
                         
                    </div>
                    
            ))
    )
};





export default  ShopItems








