import React, { useState, useEffect } from 'react';

// import { useParams } from 'react-router';

import tmdbApi from '../../API/tmdbApi';
import apiConfig from '../../API/apiConfig';
import { getMovieCredits } from '../../API';
import axios from 'axios';
const CastList = props => {

    const category = 'movie';

    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            // const res = await tmdbApi.credits(category, props.id);
            const res = await axios.get(getMovieCredits(props.id))
            // console.log(res);
            setCasts(res.data.cast.slice(0, 5));
        }
        getCredits();
    }, [category, props.id]);
    return (
        <div className="casts">
            {
                casts.map((item, i) => (
                    <div key={i} className="casts__item">
                        <div className="casts__item__img" style={{backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`}}></div>
                        <p className="casts__item__name">{item.name}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default CastList;
