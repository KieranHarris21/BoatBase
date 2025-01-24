import { useHistory } from "react-router-dom";

interface MarketplaceItemCardProps {
  item: {
    id: number;
    currency: string;
    price: number;
    imageUrl: string;
    title: string;
    city: string;
    state: string;
  };
}

export const MarketplaceItemCard: React.FC<MarketplaceItemCardProps> = ({ item }) => {
  const history = useHistory();

  const getCurrencySymbol = (locale: string, currency: string) => (0).toLocaleString(locale, { style: 'currency', currency, minimumFractionDigits: 0, maximumFractionDigits: 0 }).replace(/\d/g, '').trim()

  const getUserLocale = () => {
    const locale = navigator.language || 'en-US';
    console.log(locale);
    return locale;
  };

  const userLocale = getUserLocale();

  return (
    <div
      className='p-2'
      onClick={() => history.push(`/marketplace/item/${item.id}`)}
    >
      <div>
        <div className='aspect-square w-full rounded-lg text-gray-200'>
          <img
            src={item.imageUrl}
            className='h-full w-full rounded-lg object-cover'
          />
        </div>
        <div className='pt-2 text-xl font-semibold'>
          <div>{`${getCurrencySymbol(userLocale, item.currency)}${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</div>
        </div>
        <div className='line-clamp-2 overflow-hidden pt-1 text-lg font-normal leading-none'>
          <div>{item.title}</div>
        </div>
        <div className='pt-2 text-xs font-normal leading-tight text-gray-400'>
          <div>{`${item.city}, ${item.state}`}</div>
        </div>
      </div>
    </div>
  );
};
