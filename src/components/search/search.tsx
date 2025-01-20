import React, { useRef } from 'react';
import styles from './Search.module.css';
import SearchIcon from '../../assets/search.svg?react'; 

interface SearchProps {
  placeholder?: string; 
  onChange?: (value: string) => void;
  onSearch?: () => void; 
}

const Search = ({ placeholder = 'Search...', onChange, onSearch }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value); 
    }
  };

  const handleClick = () => {
    if (onSearch) {
      onSearch(); 
    }
    if (inputRef.current) {
      inputRef.current.focus(); 
    }
  };

  return (
    <div className={styles.searchContainer}>
      <SearchIcon className={styles.searchIcon} onClick={handleClick} />
      <input
        ref={inputRef} 
        type="text"
        placeholder={placeholder}
        className={styles.searchInput}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
