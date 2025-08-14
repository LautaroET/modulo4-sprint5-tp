import React from 'react';
import SearchInput from "../components/SearchInput";
import CharacterList from "../components/CharacterList";
import Loader from "../components/Loader";

// Import the custom hook
import { useCharacters } from "../hook/useCharacters";

const Refugio = () => {
  // Now you can use the hook without errors
  const { 
    characters, 
    allCharacters, 
    isLoading, 
    setQuery, 
    setAmount, 
    handleShowMore 
  } = useCharacters();

  return (
    <>
      <SearchInput onInputChange={setQuery} onAmountChange={setAmount} />
      {isLoading ? (
        <Loader />
      ) : (
        <CharacterList 
          characters={characters} 
          allCharacters={allCharacters} 
          onShowMore={handleShowMore} 
        />
      )}
    </>
  );
};

export default Refugio;