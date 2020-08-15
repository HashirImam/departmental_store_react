import React, { Component } from 'react'

class ToPay extends Component {
    render() {
        return (
            <div className='pay-container'>
               <strong>To Pay:</strong> {this.props.totalPrice} <br/> <br/>
               <strong>You have selected: </strong> {this.props.itemCount} items
            </div>
        )
    }
}

export default ToPay
