import React from 'react';

import './movie-card.scss';

import { Link } from 'react-router-dom';

import Button from '../button/Button';

import { category } from '../../API/tmdbApi';
import apiConfig from '../../API/apiConfig';

const MovieCard = props => {

    const item  = props.item;

    const link = '/movie/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    return (
        <Link to={link}>
            <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
                <Button>
                    <i className="bx bx-play"></i>
                </Button>
            </div>
            <h3 className='text-lg'>{item.title || item.name}</h3>
        </Link>
    );
}

export default MovieCard;
