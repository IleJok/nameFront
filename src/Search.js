import React, { Component } from 'react'

const url = "https://localhost:44304/name/count/";

class Search extends Component {
  state = {
    query: '',
    results: "",
    finished: false
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
        text = "Tässä näytetään lukumäärä kun olet hakenut";
    }

    return (
        <div>
      <form>
        <input
          placeholder="Hae nimellä..."
          ref={input => this.search = input}
        />
        <button name="Hae" onClick={this.handleClick}>Hae</button>
      </form>
      <p>{this.state.query} {text}</p>
      
      </div>
    )
  }
}

export default Search