import React from 'react';
import './search.css';

const Search = () => (
    <form className="Search">
        <input 
            type="text"
            placeholder="Buscar tu video favorito"
            className="Search-input"
        />
    </form>
)

export default Search