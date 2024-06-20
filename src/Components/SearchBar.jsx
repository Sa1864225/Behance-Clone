import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import './SearchBar.css'


const fetchSuggestions = async (value) => {
  const response = await fetch(`https://api.datamuse.com/sug?s=${value}`);
  const data = await response.json();
  return data;
};

const getSuggestionValue = (suggestion) => suggestion.word;

const renderSuggestion = (suggestion) => (
  <div>
    {suggestion.word}
  </div>
);

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = async ({ value }) => {
    const fetchedSuggestions = await fetchSuggestions(value);
    setSuggestions(fetchedSuggestions);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: 'Search the creative world at work',
    value,
    onChange,
    style: {
        fontSize: '16px', 
        width: '100%', 
        border: 'none', 
        outline: 'none', 
        backgroundColor: '#f9f9f9',

      },
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          theme={{
            container: 'autosuggest-container',
            suggestionsContainerOpen: 'suggestions-container--open',
            suggestionsList: 'suggestions-list',
            suggestion: 'suggestion',
            suggestionHighlighted: 'suggestion-highlighted',
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
