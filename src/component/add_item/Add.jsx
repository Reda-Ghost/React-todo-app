import React, { Component } from "react";

class Add extends Component {

  state = {
    name : '',
    age : ''
  }

  handelChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handelSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state)
    this.setState({
      name : '', 
      age : ''
    })
    this.focusInput()
  }

  focusInput = () => {
    document.querySelector('form.add input#name').focus()
  }


  render() {
    return (
      <form className="add" onSubmit={this.handelSubmit}>
        <input type="text"  id="name" placeholder="Name.." onChange={this.handelChange} value= {this.state.name} />
        <input type="text"  id="age" placeholder="Age.." onChange={this.handelChange} value= {this.state.age} />
        <button type="submit" className="add-btn">add</button>
      </form>
    )
  }
}

export default Add;