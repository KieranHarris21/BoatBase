import { IonContent, IonIcon, IonInfiniteScroll, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { closeSharp } from 'ionicons/icons';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ImageScrollView } from '../../components';

interface MarketplaceItemProps {
  id: number;
  price: number;
  images: IImage[];
  title: string;
  contact_details: string;
  contact_name: string;
  description: string;
  city: string;
  state: string;
  created_at: string;
}

interface IImage {
  id: number;
  imageUrl: string;
}

const mockData: MarketplaceItemProps[] = [
  {
    id: 1,
    price: 1200000,
    images: [
      { id: 1, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_144815.jpg" },
      { id: 2, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_144806.jpg" },
      { id: 3, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_145326.jpg" },
      { id: 4, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_145235.jpg" },
      { id: 5, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_144744.jpg" },
      { id: 6, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_144855.jpg" },
      { id: 7, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_145127.jpg" },
      { id: 8, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_145117.jpg" },
      { id: 9, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_145115.jpg" },
      { id: 10, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_145106.jpg" },
      { id: 11, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_145102.jpg" },
      { id: 12, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_145026.jpg" },
      { id: 13, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_144949.jpg" },
      { id: 14, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_144946.jpg" },
      { id: 15, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_144924.jpg" },
      { id: 16, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_144919.jpg" },
      { id: 17, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_144901.jpg" },
      { id: 18, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_144855.jpg" },
      { id: 19, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_144845.jpg" },
      { id: 20, imageUrl: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_144827.jpg" },
      //Add more images here 
    ],
    title: "2015 Scarab 215HO",
    contact_details: "082 555 5555",
    contact_name: "John Doe",
    description: "Get ready to make some waves with the incredible Scarab 215 HO, a sleek and powerful jet boat that offers an unforgettable 0n-water experience. The boat is equipped with 500 hp for dynamic performance and thrilling speeds. The Scarab offers seating for up to 10 passengers, featuring plush upholstery and ample legroom. Powerful sound system and perfect for watersports, cruising and relaxing on the water. Why you’ll love it? The top-notch performance, quick acceleration and agile handling makes every outing exciting. The luxurious premium seating throughout the boat provides a superior boating experience. This Scarab has been meticulously cared for and is ready to blow off your socks with incredible performance. Seize your opportunity to own a classic high-performance jetboat. 138/140Hours Bluetooth sound system Custom Scarab foam decking Wet storage on swim platform Reclining rear seats Stainless steel cupholders 2 x 250hp Rotax Ample storage on the boat Docking and ski modes Navigation lights Safety equipment COF Buoyancy Gatorhyde trailer",
    city: "St Francis Bay",
    state: "Eastern Cape",
    created_at: new Date().toISOString()
  },
];

export const MarketplaceItem: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = mockData.find((item) => item.id == parseInt(id));
  const history = useHistory();

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonInfiniteScroll>
          <IonToolbar>
            <IonTitle>
              <div className='flex items-center justify-between' >
                <IonIcon onClick={history.goBack} size='large' icon={closeSharp} />
              </div>
            </IonTitle>
          </IonToolbar>
          {!item ? <div className='-mt-20 h-[100dvh] w-full content-center justify-center text-center'>Listing Removed</div> :
            <div className='w-full pb-4'>
              <ImageScrollView images={item.images} />
              {/* Header Section */}
              <div className='mx-auto mt-4 w-11/12'>
                <div className='text-xl font-bold'>{item.title}</div>
                <div className='font-bold'>
                  {`ZAR${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                </div>
                <div>{`Contact: ${item.contact_name} - ${item.contact_details}`}</div>
                <div className='pt-2 text-sm text-gray-400'>
                  {`Listed 2 days ago in ${item.city}`}
                </div>
              </div>
              {/* Body Section */}
              <div className='mx-auto mt-4 w-11/12'>
                <div>
                  <div className='mb-2 text-lg font-semibold'>
                    {"Seller's Description"}
                  </div>
                  <div>
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          }
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>

  );
};
