import { IonIcon } from '@ionic/react';
import { searchSharp } from 'ionicons/icons';
import React, { useState } from 'react';

interface DataItem {
  title: string;
  [key: string]: any;
}

interface SearchBarProps {
  data: DataItem[];
  onFilter: (filteredData: DataItem[]) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ data, onFilter }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    const filteredData = data.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
    onFilter(filteredData);
  };

  return (
    <div className='relative mr-10'>
      <div className='rounded-full border border-gray-300 p-2 px-5'>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={`    Search`}
          className='w-40 bg-transparent focus:outline-none'
        />
      </div>
      {query.length === 0 &&
        <IonIcon className='absolute left-3 top-2 h-6 w-6 text-gray-400' icon={searchSharp} />
      }
    </div>
  );
};