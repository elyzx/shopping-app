import React, { Component } from 'react'
import {Button, TextField} from '@material-ui/core';

class AddForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.onAddBook} noValidate autoComplete="off"> 
                    <TextField id="standard-basic" label="Title" name="title"/>
                    <TextField id="standard-basic" label="Price" name="price"/>
                    <Button type="submit" variant="contained" color="primary">Insert</Button>
                </form>
            </div>
        )
    }
}

export default AddForm