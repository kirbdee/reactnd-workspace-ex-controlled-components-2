import React, { Component } from 'react';
import {ItemList} from './ItemList';

export class ShoppingList extends Component {
    state = {
        value: '',
        items: [],
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    resetValue = () => {
        this.setState({
            value: ''
        })
    }
    addItem = event => {
        event.preventDefault();
        this.setState(oldState => ({
            items: [...oldState.items, this.state.value],
        }));
        this.resetValue();
    };

    deleteLastItem = event => {
        this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
    };
    
    deleteItem = index => {
        this.setState(prevState => ({ items: prevState.items.filter((item,itemIndex)=> itemIndex !== index) }));
    };

    inputIsEmpty = () => {
        return this.state.value === '';
    };

    noItemsFound = () => {
        return this.state.items.length === 0;
    };

    render() {
        return (
            <div>
                <h2>Shopping List</h2>
                <form onSubmit={this.addItem}>
                    <input
                        type="text"
                        placeholder="Enter New Item"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <button disabled={this.inputIsEmpty()}>Add</button>
                </form>

                <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
                Delete Last Item
                </button>

                <ItemList listName="Items" items={this.state.items} onClick={this.deleteItem}/>
            </div>
        )
    }
}