import { IonButton, IonCard, IonContent, IonHeader, IonInfiniteScroll, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Marketplace.css';
import { useState } from 'react';
import { MarketplaceItemCard } from '../../components';

export const Marketplace: React.FC = () => {

  const [data, setData] = useState<any[]>([]);

  const addData = () => {

    var boats: any[] = [];

    boats[0] = { id: 2, price: 98000, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2023/04/20211130_085157_compress7.jpg", title: "SEA-DOO RXT 215", location: "St Francis Bay, Eastern Cape" };
    boats[1] = { id: 3, price: 109000, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2023/04/1.jpg", title: "SEA-DOO RXP 215", location: "St Francis Bay, Eastern Cape" };
    boats[2] = { id: 1, price: 369000, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/02/IMG_20240222_083507-scaled.jpg", title: "2018 Sea-Doo RXT-X 300", location: "St Francis Bay, Eastern Cape" };
    boats[3] = { id: 2, price: 98000, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/04/IMG_20240222_084000-scaled.jpg", title: "2007 Sea-Doo Gti 130", location: "St Francis Bay, Eastern Cape" };
    boats[4] = { id: 3, price: 198000, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/07/IMG_20240619_142307-scaled.jpg", title: "2017 Sea-Doo GTS 90", location: "St Francis Bay, Eastern Cape" };
    boats[5] = { id: 3, price: 269000, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/07/IMG_20230111_093328-scaled.jpg", title: "2016 SEA-DOO GTR 215", location: "St Francis Bay, Eastern Cape" };
    boats[6] = { id: 1, price: 300000, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/09/20240710_092634_ra6q0Z031b.jpeg", title: "2023 Sea-Doo Spark trixx 3-up", location: "St Francis Bay, Eastern Cape" };

    setData(boats);
  }

  const clearData = () => {
    setData([]);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Marketplace</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton onClick={addData}>add data</IonButton>
        <IonButton onClick={clearData}>clear data</IonButton>
        <IonInfiniteScroll>
          <div className='mx-auto my-10 grid w-11/12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5'>
            {data[0]
              ?
              data.map(item => (
                <MarketplaceItemCard item={item} />
              ))
              :
              <div>No data to display</div>}
          </div>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

