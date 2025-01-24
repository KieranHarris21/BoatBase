import { IonButton, IonCard, IonContent, IonHeader, IonInfiniteScroll, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { MarketplaceItemCard, SearchBar } from '../../components';

interface MarketplaceProps {
  id: number;
  currency: string;
  price: number;
  imageUrl: string;
  title: string;
  city: string;
  state: string;
}

const mockData: MarketplaceProps[] = [
  { id: 1, currency: 'ZAR', price: 1200000, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_144815.jpg", title: "2015 Scarab 215HO boat with red and white color scheme and a single axle trailer", city: "St Francis Bay", state: "Eastern Cape" },
  { id: 2, currency: 'ZAR', price: 98000, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2023/04/20211130_085157_compress7.jpg", title: "SEA-DOO RXT 215", city: "St Francis Bay", state: "Eastern Cape" },
  { id: 3, currency: 'ZAR', price: 109000, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2023/04/1.jpg", title: "SEA-DOO RXP 215", city: "St Francis Bay", state: "Eastern Cape" },
  { id: 4, currency: 'ZAR', price: 369000, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/02/IMG_20240222_083507-scaled.jpg", title: "2018 Sea-Doo RXT-X 300", city: "St Francis Bay", state: "Eastern Cape" },
  { id: 5, currency: 'ZAR', price: 950000, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/06/IMG_20240530_093630-scaled.jpg", title: "2018 Scarab 195HO", city: "St Francis Bay", state: "Eastern Cape" },
  { id: 6, currency: 'ZAR', price: 98000, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/04/IMG_20240222_084000-scaled.jpg", title: "2007 Sea-Doo Gti 130", city: "St Francis Bay", state: "Eastern Cape" },
  { id: 7, currency: 'ZAR', price: 198000, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/07/IMG_20240619_142307-scaled.jpg", title: "2017 Sea-Doo GTS 90", city: "St Francis Bay", state: "Eastern Cape" },
  { id: 8, currency: 'ZAR', price: 269000, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/07/IMG_20230111_093328-scaled.jpg", title: "2016 SEA-DOO GTR 215", city: "St Francis Bay", state: "Eastern Cape" },
  { id: 9, currency: 'ZAR', price: 300000, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/09/20240710_092634_ra6q0Z031b.jpeg", title: "2023 Sea-Doo Spark trixx 3-up", city: "St Francis Bay", state: "Eastern Cape" },
];

export const MarketplaceHome: React.FC = () => {

  const [filteredData, setFilteredData] = useState(mockData);

  useEffect(() => {
    console.log(filteredData);
  }, [filteredData]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className='flex items-center justify-between'>
            <IonTitle>Marketplace</IonTitle>
            <SearchBar data={mockData} onFilter={(data) => setFilteredData(data)} />
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonInfiniteScroll>
          <div className='mx-auto my-10 grid w-11/12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5'>
            {filteredData[0] ? filteredData.map(item => (
              <MarketplaceItemCard key={item.id} item={item} />
            )) :
              <div key={1} >No data to display</div>
            }
          </div>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

