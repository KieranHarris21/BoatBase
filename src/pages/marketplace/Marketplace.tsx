import { IonButton, IonCard, IonContent, IonHeader, IonInfiniteScroll, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Marketplace.css';
import { useState } from 'react';

export const Marketplace: React.FC = () => {

  const [data, setData] = useState<any[]>([]);

  const addData = () => {

    var boats: any[] = [];

    for (var i = 0; i < 100; i++) {
      boats[i] = { id: i, make: "Seadoo", model: `Gti ${i}`, type: "Jetski" };
    }

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

