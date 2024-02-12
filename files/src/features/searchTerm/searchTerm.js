import React from 'react';
import { setSearchTerm, clearSearchTerm } from './searchTermSlice.js';

const searchIconUrl = 'placeholder.com';
const clearIconUrl = 'placeholder2.com';

export const SearchTerm = (props) => {
    const { searchTerm, dispatch } = props;

    const onSearchTermChangeHandler = (e) => {
        const userInput = e.target.value;
        dispatch(setSearchTerm(userInput));
    };

    const onClearSearchTermhandler = () => {
        dispatch(clearSearchTerm());
    };

    retrun (
        <div id="search-container">
            <img id="search-icon" alt="" src={searchIconUrl} />
            <input
                id="search"
                type="text"
                value={searchTerm}
                onChange={onSearchTermChangeHandler}
                placeholder="Search products"
            />
            {searchTerm.legnth > 0 && (
                <button
                    onClick={onClearSearchTermHandler}
                    type="button"
                    id="search-clear-button"
                >
                    <img src={clearInconUrl} alt="" />
                </button>
            )}
        </div>
    );
};
