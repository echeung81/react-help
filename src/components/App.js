import React, { Component } from 'react';
import Top from './Top.jsx'
import { FilmCard, FilmCards } from './Film'
import LoadButton from './LoadButton.jsx'

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      films: null,
      showFilms: false
    };

    this.handleFilmClick = this.handleFilmClick.bind(this);
  };

  handleFilmClick() {

    if(!this.state.showFilms) {
        //transitioning to show data: so load it
         fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(data => this.setState({ films: data, showFilms: true }))
        .catch(e => console.log(e))
    } else {
        //hide the data. no need to load it. just tell the component to hide it
        console.log("hide");
        this.setState({showFilms: false});
    }
  }



  render() {

    return (
      <div>
        <Top />
        <LoadButton text={"Load Film"} showingStuff={this.state.showFilms} stuffType={"Films"} handleClick={this.handleFilmClick} />
        <FilmCards films={this.state.films} show={this.state.showFilms} />
      </div>
    )
  }
}

export default App;