import React, { Component } from 'react';
import './App.css';
import ItemsList from './ItemsList';

class App extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      list : [],
      item : {
        inputvalue : "",
        itemKey: ""
      }
    }
    this.deleteItem = this.deleteItem.bind(this)
  }
  
  inputChangeHandler = (event) => {
    this.setState({
      item : {
        inputvalue: event.target.value,
        itemKey: Date.now()
      }
    })
  }

  addItem = (event) => {
    event.preventDefault()
    const items = this.state.item
    console.log(items)
    if(items.inputvalue !== ""){
      var newItems = [...this.state.list,items]
      this.setState({
        list: newItems,
        item : {
          inputvalue: "",
          itemKey: ""
        }
      })
    }
  }

  updateItem = (newtext,key) => {
    const newlist = this.state.list;
    newlist.map(data=>{      
      if(data.itemKey===key){
        data.inputvalue= newtext;
      }
    })
    this.setState({
      list: newlist
    })
  }
  deleteItem (key){
    console.log("deletebtn clicked")
    const filteredItem = this.state.list.filter( data => {
        console.log(data.itemKey)
        return data.itemKey !== key
      }
    )
    console.log(filteredItem)
    this.setState({
      list: filteredItem
    })
    
  }
  
  render() {
    return (

      <div className="App">
        <h2>Todo App</h2>
        <header>
          <form id="todo-form" onSubmit={this.addItem}>
            <input value={this.state.item.inputvalue} onChange={this.inputChangeHandler} id="inputfield" placeholder="Save, edit and double-tap to delete"/>
            <button type="submit">Save</button>
          </form>
        </header>
        <div id="listdata">
          <ItemsList list={this.state.list} deleteItem={this.deleteItem} updateItem={this.updateItem}/>
        </div>
      </div>
    )
  }
}

export default App
