import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
    const[category, setCategory] = useState('people');
    const [id, setId] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Search for: </label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="people">People</option>
                <option value="films">Films</option>
                <option value="starships">Starships</option>
                <option value="vehicles">Vehicles</option>
                <option value="species">Species</option>
                <option value="planets">Planets</option>
            </select>
            <label>Id: </label>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
};

export default SearchForm;