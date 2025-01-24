import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Card } from '../../components/card/Card';
// import './Home.css';

export const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='main-title'>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='mt-4 mx-auto w-11/12 h-20 rounded-md bg-blue-400'> second div with tailwindcss </div>
        <Card
          header='Card Header'
          body='Card Body'
          imageSrc='https://via.placeholder.com/150'
          styles='mt-4 mx-auto w-11/12 bg-gray-400'
        />
      </IonContent>
    </IonPage>
  );
};

