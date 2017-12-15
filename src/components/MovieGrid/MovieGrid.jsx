import React from 'react';
import ReactLoading from 'react-loading';
import {Link} from 'react-router-dom';
import './MovieGrid.css';
import {Container} from 'react-materialize';

const MovieGrid = (props) => (
  <div>
    <Container>
      <div className="row">           
        {
          props.movies ? props.movies.map((movie, idx) => 
            <div className="col l3" key={idx}>
              <img className="moviePic" src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt="Movie Poster"/> 
              <br/>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link><br/></div>)
              :
              <div>
              <br/><br/><br/><br/><br/><br/>
              <ReactLoading className="loadingCircle" type="spinningBubbles" color="#4444" />
              </div>
        }
      </div>
    </Container>
  </div>
)

export default MovieGrid; 




