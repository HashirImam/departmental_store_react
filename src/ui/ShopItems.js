import React, { Component } from 'react'
import '../App.css'
import ItemDetail from './ItemDetail'
import { Link } from 'react-router-dom'

class ShopItems extends Component  {

    render() {
    return (
        
     this.props.items.map((item) => (
        <div className = 'card'>
            <div className = 'card-inner'>
                <ul>
                    <li>
                    <strong>Item Name: </strong><Link to={`/shop/${item.id}`}>{item.name}</Link>
                    </li>
                    <li>
                        <button onClick={this.props.increment.bind(this,item.id)}>+</button>
                    </li>
                    <li>
                        {item.count}
                    </li>
                    <li>
                        <button onClick={this.props.decrement.bind(this,item.id)}>-</button>
                    </li>
                </ul>
            </div>
        </div>
    ))
    
   
    ) 
     
}
}

export default ShopItems
