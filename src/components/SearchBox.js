import React from 'react';


const SearchBox = ({searchChange}) =>{
    return(
        <div className = 'pa2'>
        <input className = 'tc dib br3 pa3 ma2 grow bw2 shadow-5' type='search' placeholder='search cats' onChange={searchChange} />
        </div>
    )
}

export default SearchBox;