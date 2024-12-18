import { IonButton, IonCard, IonContent, IonHeader, IonInfiniteScroll, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Garage.css';
import { ExploreContainer } from '../../components';
import { useState } from 'react';

export const Garage: React.FC = () => {

  const [data, setData] = useState<any[]>([]);

  const addData = () => {
    setData([{make: "Seadoo", model: "Gti 170", type: "Jetski"}, {make: "Yamaha", model: "Wave Runner 1300", type: "Jetski"}]);
  }
  
  const clearData = () => {
    setData([]);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Your Garage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton onClick={addData}>add data</IonButton>
        <IonButton onClick={clearData}>clear data</IonButton>
        <IonInfiniteScroll>
        {data[0] 
        ? 
        data.map(item => (
        <IonCard>
          <div>
            <div>
              <IonLabel>{"Make: "}</IonLabel>
              <IonItem>{item.make}</IonItem>
            </div> 
            <div>
              <IonLabel>{"Model: "}</IonLabel>
              <IonItem>{item.model}</IonItem>
            </div>
          </div>
          <div>{item.type}</div>
        </IonCard>
        )) 
        : 
        <div>No data to display</div>}

        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

