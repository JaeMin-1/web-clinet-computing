import React, { useState } from 'react';
import Movie from './Movie';
import './Search.css';
import { naverMoviesApi } from '../api';
import { element, number } from 'prop-types';
//import { MdAdd } from 'react-icons/md';

class Search extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    value: '',
    name: '',
    isClick: false,
    index: number
  };

  getSearchMovie = async () => {
    console.log('search Movie');
    const search = this.state.value;

    try {
      if (search === '') {
        this.setState({ movies: [], isLoading: false });
      } else {
        const {
          data: { items }
        } = await naverMoviesApi.search(search);
        this.setState({ movies: items, isLoading: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getSearchMovie();
  }

  handleChange = (e: any) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.getSearchMovie();
  };

  render() {
    const { movies, isLoading, name, isClick } = this.state;
    const count = 0;
    return (
      <section className='container'>
        {isLoading ? (
          <div className='loader'>
            <span className='loader__text'>Loading..{this.state.name}</span>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div>
              <h1 className='input_title'>영화 검색 서비스</h1>
              <div className='input_div'>
                <input
                  className='input_search'
                  type='text'
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder='영화를 검색해 보세요.'
                />
                <button className='sub_button' type='submit'>
                  +
                </button>
              </div>
              <div className='div_button'>
                {movies.map((movie, element) => {
                  if (element >= 0 && element <= 9) {
                    return (
                      <button
                        key={element}
                        className='movie_button'
                        onClick={() => {
                          this.state.isClick = true;
                          this.state.index = element;
                        }}
                      >
                        {element + 1}
                      </button>
                    );
                  }
                })}
              </div>
              <div className='movies'>
                {movies.map((movie, element) => {
                  if (element >= 0 && element <= 9) {
                    if (isClick && element == this.state.index) {
                      this.state.isClick = false;
                      return (
                        <Movie
                          key={movie.link}
                          id={movie.link}
                          year={movie.pubDate}
                          title={movie.title}
                          poster={movie.image}
                          rating={movie.userRating}
                          director={movie.director}
                          actor={movie.actor}
                        />
                      );
                    } else {
                    }
                  }
                })}
              </div>
            </div>
          </form>
        )}
      </section>
    );
  }
}

export default Search;