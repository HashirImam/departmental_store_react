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
                            <i className='fas fa-gift'></i><br/><br/>
                            <strong>Item Count: </strong>{item.count}
                            <div className='btns'>
                             <button className='btn-plus' onClick={() => props.increment(item.id)}>   +   </button>
                         
                             <button className='btn-minus' onClick={() => props.decrement(item.id)}> - </button>
                            </div>
                    </div>
                    
            ))
    )
};





export default  ShopItems








