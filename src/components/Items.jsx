import React, { Component } from 'react'
import ItemDetail from './ItemDetail'
import AddForm from './AddForm'

class Items extends Component {

    state = {
        showForm: false
    }

    handleClick = () => {
        this.setState({
            showForm: true
        })
    }

    handleAddBook = (event) => {
        event.preventDefault();
        this.setState({
            showForm: false
        })

        let newBook = {
            title: event.target.title.value,
            price: event.target.price.value
        }
        this.props.onAddNewBook(newBook)
    }

    render() {
        const {books, handleAddTotal} = this.props
        const {showForm} = this.state
        return (
            <div>
                List
                {/* Conditional rendering with ternaries */}
                {
                    showForm ? <AddForm onAddBook={this.handleAddBook} /> : <button onClick={this.handleClick}>Show Form</button>
                }

                {
                    books.map((book, i) => {
                        return <ItemDetail 
                                    key={i}
                                    myBook={book}
                                    handleAddTotal={handleAddTotal}
                                />
                    })  
                }
            </div>
        )
    }
}

export default Items