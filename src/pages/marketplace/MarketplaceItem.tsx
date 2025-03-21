import { IonContent, IonInfiniteScroll, IonPage } from '@ionic/react';
import { FC, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { ImageScrollView } from '../../components';
import { IMarketplaceItemProps } from '../../interfaces/interfaces';
import { PageHeader } from '../../components/pageHeader/PageHeader';

const mockData: IMarketplaceItemProps[] = [
  {
    id: 1,
    price: 1200000,
    images: [
      { id: 1, image_url: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_144815.jpg" },
      { id: 2, image_url: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_144806.jpg" },
      { id: 3, image_url: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_145326.jpg" },
      { id: 4, image_url: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_145235.jpg" },
      { id: 5, image_url: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_144744.jpg" },
      { id: 6, image_url: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_144855.jpg" },
      { id: 7, image_url: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_145127.jpg" },
      { id: 8, image_url: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_145117.jpg" },
      { id: 9, image_url: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_145115.jpg" },
      { id: 10, image_url: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_145106.jpg" },
      { id: 11, image_url: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_145102.jpg" },
      { id: 12, image_url: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_145026.jpg" },
      { id: 13, image_url: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_144949.jpg" },
      { id: 14, image_url: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_144946.jpg" },
      { id: 15, image_url: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_144924.jpg" },
      { id: 16, image_url: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_144919.jpg" },
      { id: 17, image_url: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_144901.jpg" },
      { id: 18, image_url: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_144855.jpg" },
      { id: 19, image_url: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_144845.jpg" },
      { id: 20, image_url: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_144827.jpg" },
    ],
    title: "2015 Scarab 215HO",
    contact_details: "082 555 5555",
    contact_name: "John Doe",
    description: "Get ready to make some waves with the incredible Scarab 215 HO, a sleek and powerful jet boat that offers an unforgettable 0n-water experience. The boat is equipped with 500 hp for dynamic performance and thrilling speeds. The Scarab offers seating for up to 10 passengers, featuring plush upholstery and ample legroom. Powerful sound system and perfect for watersports, cruising and relaxing on the water. Why you’ll love it? The top-notch performance, quick acceleration and agile handling makes every outing exciting. The luxurious premium seating throughout the boat provides a superior boating experience. This Scarab has been meticulously cared for and is ready to blow off your socks with incredible performance. Seize your opportunity to own a classic high-performance jetboat. 138/140Hours Bluetooth sound system Custom Scarab foam decking Wet storage on swim platform Reclining rear seats Stainless steel cupholders 2 x 250hp Rotax Ample storage on the boat Docking and ski modes Navigation lights Safety equipment COF Buoyancy Gatorhyde trailer",
    city: "St Francis Bay",
    state: "Eastern Cape",
    created_at: new Date().toISOString()
  },
  {
    id: 2,
    price: 98000,
    images: [
      { id: 1, image_url: "https://bayviewboating.co.za/wp-content/uploads/2023/04/20211130_085157_compress7.jpg" },
      { id: 2, image_url: "https://bayviewboating.co.za/wp-content/uploads/2023/04/20211130_085211_compress26.jpg" },
      { id: 3, image_url: "https://bayviewboating.co.za/wp-content/uploads/2023/04/20211130_085241_compress39.jpg" },
      { id: 4, image_url: "https://bayviewboating.co.za/wp-content/uploads/2023/04/20211130_085306_compress59.jpg" },
      { id: 5, image_url: "https://bayviewboating.co.za/wp-content/uploads/2023/04/20211130_085319_compress68.jpg" },
      { id: 6, image_url: "https://bayviewboating.co.za/wp-content/uploads/2023/04/20211130_085329_compress75.jpg" },
    ],
    title: "Sead-Doo RXT 215",
    contact_details: "082 555 5555",
    contact_name: "John Doe",
    description: "2006 Sea-Doo RXT 215hp Supercharged intercooled<br>Rotax 4-Tec Engine<br>Sea-Doo Direct drive forward/neutral/reverse<br>Closed loop cooling system<br>Deckpads<br>Comfortable room for three<br>Digitally encoded key<br>Watertight storage<br>Comfortable room for three<br>Galvanized trailer",
    city: "St Francis Bay",
    state: "Eastern Cape",
    created_at: new Date().toISOString()
  },
];

export const MarketplaceItem: FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = mockData.find((item) => item.id == parseInt(id));

  return (
    <IonPage>
      {!item ? <PageHeader title="item removed" back={true} /> :
        <PageHeader title={item.title} back={true} />
      }
      <IonContent fullscreen>
        <IonInfiniteScroll>
          {!item ? <div className='-mt-20 h-[100dvh] w-full content-center justify-center text-center'>Listing Removed</div> :
            <div className='w-full pb-4'>
              <ImageScrollView images={item.images} />
              {/* Header Section */}
              <div className='mx-auto mt-4 w-11/12'>
                <div className='font-semibold text-xl'>
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
                  <p className=''>
                    {item.description.split('<br>').map((line, index) => (
                      <Fragment key={index}>
                        {line}
                        <br />
                      </Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          }
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};
