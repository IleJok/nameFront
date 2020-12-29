import React, { Component } from 'react'

const url = "https://localhost:44304/name/count/";

class Search extends Component {
  state = {
    query: '',
    results: "",
    finished: false,
    errorMessage: null,
    error: false
  }

  getInfo = () => {
    fetch(url + this.state.query)
      .then(res => res.json())
      .then((result) => {
        this.setState({
            results: result,
            finished: true
        })
      })
    }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        this.getInfo()
      } 
    })
  }

  render() {
    
    let text;
    if (this.state.finished) {
        text = this.state.results;
    } else {
        text = "Here you will see the name and amount after you have clicked search";
    }

    return (
        <>
      <form>
        <input
          placeholder="Search with name..."
          ref={input => this.search = input}
        />
        <button onClick={this.handleClick}>Search</button>
      </form>
      <p>{this.state.query} {text}</p>
      </>
    )
  }
}

export default Search