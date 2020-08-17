import React, { Component } from 'react'
import ShopItems from './ShopItems'
import '../App.css'
import ToPay from './ToPay'
import { connect } from 'react-redux'
import { fetchItems, increment, decrement } from './redux'

class Shop extends Component {
 

    componentDidMount () {
        this.props.fetchItems()
    }

    render() {

        return (
            <section className='cards'>
            <ToPay price = {this.props.price} itemCount = {this.props.itemCount} />
                
             { this.props.isLoading?
             <h2>loading....</h2>
             :
             <ShopItems items = {this.props.itemData} increment = {this.props.increment} decrement = {this.props.decrement}/>
             }
        </section>
        )
    }
}


const mapStateToProps = state => {
    return {
        
        itemData: state.items,
        itemCount: state.itemCount,
        price: state.totalPrice,
        isLoading: state.loading
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchItems: () => dispatch(fetchItems()),
        increment: (id) => dispatch(increment(id)),
        decrement: (id) => dispatch(decrement(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Shop)

