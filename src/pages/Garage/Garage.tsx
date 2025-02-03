import {
  IonContent,
  IonIcon,
  IonPage,
} from '@ionic/react';
import { FC, useState } from 'react';
import { IAccessories, IVesselDetails } from '../../interfaces/interfaces';
import { PageHeader } from '../../components/pageHeader/PageHeader';
import { addSharp } from 'ionicons/icons';
import { AddVesselModal } from './AddVesselModal';

const vessels: IVesselDetails[] = [
  {
    id: 1,
    type: "inboard",
    title: "2015 Scarab 215HO",
    image: { id: 1, image_url: "https://bayviewboating.co.za/wp-content/uploads/2024/09/IMG_20240903_144815.jpg" },
    cof_date: "21/01/2024",
    trailer_license_date: "21/01/2024"
  },
  {
    id: 2,
    type: "inboard",
    title: "SEA-DOO RXT 215",
    image: { id: 1, image_url: "https://bayviewboating.co.za/wp-content/uploads/2023/04/20211130_085157_compress7.jpg" },
    cof_date: "21/01/2024",
    trailer_license_date: "21/01/2024"
  },
  {
    id: 3,
    type: "inboard",
    title: "Sea-Doo XP800",
    image: { id: 1, image_url: "https://scontent-jnb2-1.xx.fbcdn.net/v/t45.5328-4/473213422_474909488748335_8843395680729118933_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=taWmhzqYcA4Q7kNvgGrNm-j&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=ALc1vdyXpO0S6gbhPtCl3UX&oh=00_AYBZz1Aj9jbOXsGBG-SkZ7XtpgcFz6ZAJyz24nl9jaJqOg&oe=679C2F8A" },
    cof_date: "21/01/2024",
    trailer_license_date: "21/01/2024"
  }
];

const accessories: IAccessories[] = [
  {
    id: 1,
    title: "O’Brien Valhalla Wakeboard",
    image: { id: 1, image_url: "https://www.watersportswarehouse.co.za/wp-content/uploads/2018/12/valhalla.webp" }
  },
  {
    id: 2,
    title: "Hyperlite Murray Wakeboard",
    image: { id: 1, image_url: "https://wakeboards.co.za/wp-content/uploads/2021/11/Hyperlite-2022-Murray-Pro-Wakeboard.png" }
  },
  {
    id: 3,
    title: "Liquid Force Transit Binding",
    image: { id: 1, image_url: "https://wakeboards.co.za/wp-content/uploads/2021/12/LiquidForce-Transit-Wakeboard-binding.jpg" }
  },
  {
    id: 4,
    title: "TR9 Rope Handle Combo",
    image: { id: 1, image_url: "https://wakeboards.co.za/wp-content/uploads/2020/01/LiquidForce-TR9-Handle-w-Static-Line-Combo-65-Blue.jpeg" }
  },
]

export const Garage: FC = () => {

  const [section, setSection] = useState("Accessories");

  const addVessel = () => {
    console.log('clicked');
  }

  return (
    <IonPage>
      <PageHeader title='My Garage' />
      <IonContent fullscreen>
        <div className='mt-12'>
          {section === "Vessels" ?
            <div>
              {vessels[0] && vessels.map(item => (
                <div key={item.id} className='mx-auto mt-4 w-11/12 rounded-lg last:mb-10'>
                  <div className='h-40 w-full items-center overflow-hidden rounded-xl'>
                    <img className='-mt-10' src={item.image.image_url} />
                  </div>
                  <div className='text-center text-2xl'>
                    <div>{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
            :
            <div className='mx-auto my-10 grid w-11/12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5'>
              {accessories[0] && accessories.map(item => (
                <div key={item.id} className='mt-4 rounded-lg last:mb-10 odd:mr-2 even:ml-2'>
                  <div className='items-center overflow-hidden rounded-xl bg-gray-200'>
                    <img className='' src={item.image.image_url} />
                  </div>
                  <div className='line-clamp-2 overflow-hidden pt-1 text-center text-lg font-normal leading-none'>
                    <div>{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          }
        </div>
      </IonContent>
      <div className='absolute top-16 w-full'>
        <div className='flex w-full flex-row text-center text-xl'>
          <div className={section === "Vessels" ? 'text-[--ion-color-primary] w-1/2' : 'text-gray-200 w-1/2'} onClick={() => setSection("Vessels")}>
            Vessels {/* <IonIcon icon={boatSharp} /> */}
          </div>
          <div className={section === "Accessories" ? 'text-[--ion-color-primary] w-1/2' : 'text-gray-200 w-1/2'} onClick={() => setSection("Accessories")}>
            Accessories {/* <IonIcon icon={helpBuoySharp} /> */}
          </div>
        </div>
      </div>

      <div className="z-100 absolute bottom-0 w-full justify-items-end p-6">
        <div
          id='open-modal'
          className='flex h-14 w-14 items-center rounded-xl bg-gray-800'
        >
          <IonIcon className='mx-auto h-10 w-10 font-bold text-gray-200' size='large' icon={addSharp} />
        </div>
      </div>
      <AddVesselModal />
    </IonPage>
  );
};
