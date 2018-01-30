import React, { Component } from 'react';
import './App.css';
import AppList from './AppList';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      items: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {

    // zatrzymanie domyślnego przeładowania strony po wysłaniu formularza
    event.preventDefault()

    // walidacja
    if(this.state.value !== '') {

    }

    this.setState((prevState) => ({
      value: '',

      // items: prevState.items.concat(prevState.value)
      // do nowej tablicy dodajemy wszystkie z poprzedniej i dodajemy nową wartość
      items: [...prevState.items, prevState.value]
    }))
  }

  deleteItem = (index) => {
    this.setState((prevState) => {
      return {
        items: prevState.items.filter((item, key) => {
          if(key !== index) {
            return true;
          }
        })
      }
    })
    
  }

  render() {

    // const items = this.state.items;
    // const value = this.state.value; te linijki zapisane są krócej poniżej ->
    const {items, value} = this.state;

    return (
      <div>
        <h1>TO DO LIST</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={value} onChange={this.handleChange}/>
          <input type="submit" value="dodaj" />
        </form> 
        <AppList items={items} deleteItem={this.deleteItem}/>   
      </div>
    );
  }
}

export default App;
