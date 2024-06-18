import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';

const SearchResults = () => {
    const { category, id } = useParams()
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}/`)
            .then(response => {
                setData(response.data);
                setError(null);
            })
            .catch(err => {
                setError('Estos no son los droides que está buscando');
                setData(null);
            });
    }, [category, id]);

    const goBack = () => {
        navigate(-1);
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    if (!data) {
        return <p>Loading...</p>;
    }

    const showData = () => {
        const keys = Object.keys(data);
        const displayedKeys = keys.slice(1, 5);
        return (
            <div>
                <h1>
                    {data['name']}
                </h1>
                <ul>
                    {displayedKeys.map(key => (
                        <li key={key}>
                            {key.charAt(0).toUpperCase() + key.slice(1)}: {data[key]}
                        </li>
                    ))}
                </ul>
            </div>

        );
    };

    return (
        <div>
            <h1>Search Result</h1>
            {showData()}
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default SearchResults;