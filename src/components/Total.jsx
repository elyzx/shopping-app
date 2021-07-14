import React, { Component } from 'react'

class Total extends Component {

    render() {
        const {books} = this.props

        let sum = books.reduce((acc, book) => {
            return acc+ (book.quantity * book.price)
        }, 0)

        return (
            <div>
                <h2>
                    Total
                </h2>
                {
                    books.map((book) => {
                        return (
                            <div>
                                {book.title} x {book.quantity} = {book.quantity * book.price}
                            </div>
                        )
                    })
                }
                <h3> 
                    Total amount is: {sum.toFixed(2)}
                </h3>
            </div>
        )
    }
}

export default Total