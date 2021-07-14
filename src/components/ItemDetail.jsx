import React, { Component } from 'react'
import {Button, TextField} from '@material-ui/core';

class ItemDetail extends Component {
    render() {
        const {myBook, handleAddTotal} = this.props
        return (
            <form onSubmit={(event) => {handleAddTotal(event, myBook) }} noValidate autoComplete="off"> 
                <p name="title">{myBook.title}</p>
                <p name="price">${myBook.price}</p>
                <TextField id="standard-basic" label="Quantity" name="quantity"/>
                <Button type="submit" variant="contained" color="primary">Add</Button>
            </form>
        )
    }
}

export default ItemDetail