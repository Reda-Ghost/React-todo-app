import React, { Component } from 'react';
import Items from './component/items/Items';
import Add from './component/add_item/Add';
import './App.css';

class App extends Component {

  state = {
    items : [
      {id: 1, name: 'Mohamed', age: 22},
      {id: 2, name: 'Saido', age: 28},
      {id: 3, name: 'Kheira', age: 18}
    ],
  }

  deleteItem = (id) => {
    const items = this.state.items.filter(item => item.id !== id)
    this.setState({
      items
    })
  }

  addItem = (item) => {
    item.id = this.state.items.length + 1
    
    let items = this.state.items
    
    items.push(item)

    this.setState({
      items 
    })


  }

  render() {
    return (
      <div className="App">
        <h1 className='main-title'>ToDo App</h1>
        <Items data={this.state.items} deleteItem={this.deleteItem}/>
        <Add addItem = {this.addItem}/>
      </div>
    )
  }
}

export default App;
