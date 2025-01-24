import React from 'react';

interface MarketplaceItemCardProps {
  item: {
    id: string;
    name: string;
    price: number;
    title: string;
    imageUrl: string;
    location: string;
  };
}

export const MarketplaceItemCard: React.FC<MarketplaceItemCardProps> = ({ item }) => {
  return (
    <div
      key={item.id}
      className='p-2'>
      <div>
        <div className='aspect-square w-full rounded-lg text-gray-200'>
          <img
            src={item.imageUrl}
            className='h-full w-full rounded-lg object-cover'
          />
        </div>
        <div className='pt-2 text-xl font-bold'>
          <div>{`ZAR${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</div>
        </div>
        <div className='overflow-ellipsis text-wrap pt-1 text-lg font-thin leading-tight'>
          <div>{item.title}</div>
        </div>
        <div className='text-sm font-thin leading-tight text-gray-400'>
          <div>{item.location}</div>
        </div>
      </div>
    </div>
  );
};
