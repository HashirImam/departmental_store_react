import React, { Component } from 'react'
import axios from 'axios' 
import ShopItems from './ShopItems'
import '../App.css'
import ToPay from './ToPay'

class Shop extends Component {
    state = {
        items: null,
        totalPrice: 0,
        itemCount:0
    }
    componentDidMount () {
        axios.get('https://5f33e9c1cfaf5a001646b758.mockapi.io/api/v0/product')
        .then(response => {

            const products = response.data;
           
            const updatedproducts = products.map(product => {
                return {
                    ...product,
                    count: 0
                }
            });

            this.setState({items: updatedproducts});
            console.log(updatedproducts);
            
        })
        .catch(error => {
           console.log(error);
          
         } );
    }
    
    increment = (id) => {

        const prevCount = this.state.items[id-1].count;
        const initialPrice = this.state.totalPrice;
        const updatedPrice = initialPrice + parseInt(this.state.items[id-1].price);
        const initialItemCount = this.state.itemCount;
        const updatedItemCount = initialItemCount + 1;
        
        this.setState({totalPrice: updatedPrice})
        this.setState({itemCount: updatedItemCount})
        this.setState({ items: this.state.items.map(item =>{
            if(item.id === id){
                item.count = prevCount + 1 ;
            }
            return item
        })})
        
    }

    decrement = (id) => {

        const prevCount = this.state.items[id-1].count;
        if(prevCount === 0)
            alert('cannot decrement more')
            else {
                const initialPrice = this.state.totalPrice;
                const updatedPrice = initialPrice - parseInt(this.state.items[id-1].price);
                const initialItemCount = this.state.itemCount;
                const updatedItemCount = initialItemCount - 1;
        
                this.setState({totalPrice: updatedPrice})
                this.setState({itemCount: updatedItemCount})
                this.setState({ items: this.state.items.map(item =>{

            if(item.id === id){
                item.count = prevCount - 1 ;
            }
            return item
        })})
    }
    }

    render() {

        return (
            <section className='cards'>
            <ToPay totalPrice = {this.state.totalPrice} itemCount = {this.state.itemCount} />
             {this.state.items?
             <ShopItems  items={this.state.items} increment = {this.increment} decrement = {this.decrement}/>
             :
             <p>not loaded yet</p>}     
             
        </section>
        )
    }
}

export default Shop

