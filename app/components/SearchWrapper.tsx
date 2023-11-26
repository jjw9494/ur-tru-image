// components/SearchWrapper.tsx
"use client"
import dynamic from 'next/dynamic';
import { SearchProps } from '../utils/types';

const Search = dynamic(() => import('./Search'), { ssr: false });

const SearchWrapper: React.FC<SearchProps> = (props) => {
  return <Search {...props} />;
};

export default SearchWrapper;
