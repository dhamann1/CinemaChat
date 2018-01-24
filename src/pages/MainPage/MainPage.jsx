import React, {Component} from 'react';
import MovieGrid from '../../components/MovieGrid/MovieGrid'; 
import './MainPage.css';
import {Container} from 'react-materialize';
import API from '../../utils/tmbdAPI';

class MainPage extends Component {
    constructor(props){
      super();
      this.state = {
        movies: null, 
      };
    }

    nowPlaying = () => {
      API.fetchNowPlaying()
        .then(movies => this.setState(
          {movies}
        ))
    }

    topRated = () => {
      API.fetchTopRated()
      .then(movies => this.setState(
        {movies}
      ))
    }

    popular = () => {
      API.fetchPopular()
      .then(movies => this.setState(
        {movies}
      ))
    }

    upcoming = () => {
      API.fetchUpcoming()
      .then(movies => this.setState(
        {movies}
      ))
    }

    handleSubmit(e){
      e.preventDefault()
      var result = this.refs.name.value.trim().replace(/ /g, "%20")
      const inputField = {
        search: result
      }
      fetch('/api/movies/search', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({name: inputField.search}) 
      })
      .then(res => res.json())
      .then(movies => this.setState({movies}))
    }

    render() {
		  return (
        <div>
			    <Container> 
          <div className="formInput"> 
            <form className="form-horizontal" onSubmit={(e) => this.handleSubmit(e)} >
              <div>
                <div className="searchfield ">
                  <input className="searchbar" placeholder="Search (e.g. 'Star Wars')" ref='name'  />
                    <div className="col-sm-12 text-center">
                      <button className="btn btn-default">Search</button>&nbsp;&nbsp;
                    </div>
                  </div>
              </div>
            </form>
            </div>
            <br/>
				    <div className="mainButtons"> 
				  	    <button onClick={this.nowPlaying}>Now Playing</button>&nbsp;&nbsp;
              	<button onClick={this.topRated}>Top Rated</button>&nbsp;&nbsp;
              	<button onClick={this.popular}>Popular</button>&nbsp;&nbsp;
              	<button onClick={this.upcoming}>Upcoming</button>&nbsp;&nbsp;
				    </div> 
		  	  </Container> 
          <br/> 
				    <MovieGrid movies={this.state.movies}/> 
        </div>
    )}
}

export default MainPage; 













