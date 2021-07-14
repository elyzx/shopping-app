import React, { Component } from 'react';
import {Button, TextField} from '@material-ui/core';

class Search extends Component {
    render() {
        const {onSearch} = this.props
        return (
            <div>
                <TextField onChange={onSearch} 
                    id="standard-basic" 
                    label="Search for a book"
                     name="search"/>
            </div>
        )
    }
}

export default Search