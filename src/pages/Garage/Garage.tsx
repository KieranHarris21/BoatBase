import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCheckbox,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInfiniteScroll,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { useRef, useState } from 'react';
// import { useLocation } from 'react-router-dom';

interface IVesselDetails {
  id: string
  make: string
  model: string
}

export const Garage: React.FC = () => {

  const modal = useRef<HTMLIonModalElement>(null);

  const [data, setData] = useState<any[]>([]);

  // modal state
  const [vesselMake, setVesselMake] = useState<string>();
  const [vesselModel, setVesselModel] = useState<string>();

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

  const onWillDismiss = (e: Event) => {
    console.log(e);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Garage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonInfiniteScroll>
          {data[0]
            ?
            data.map(item => (
              <IonItem>
                <IonAvatar slot="start">
                  <p> {item?.id} </p>
                </IonAvatar>
                <IonLabel>
                  <h2>{item?.make}</h2>
                  <p>{item?.model}</p>
                </IonLabel>
              </IonItem>
            ))
            :
            <div className="add-vessel">
              <IonButton id="open-modal" expand="block">
                <b>Add Vessel</b>
              </IonButton>
            </div>
          }

        </IonInfiniteScroll>
        <IonModal ref={modal} trigger="open-modal" onWillDismiss={(e) => onWillDismiss(e)}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
              </IonButtons>
              <IonTitle>Add Vessel</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonCard className='details-container'>
              <IonCol>
                <h3>Vessel Details</h3>
                <IonInput
                  label='Make: '
                  labelPlacement='stacked'
                  className='text-input'
                  type='text'
                  placeholder='Enter Vessel Make'
                  value={vesselMake}
                ></IonInput>
                <IonInput
                  label='Model: '
                  labelPlacement='stacked'
                  className='text-input'
                  type='text'
                  placeholder='Enter Vessel Model'
                  value={vesselModel}
                ></IonInput>
                <div className='checkbox-container-label'>
                  {"Engine Placement:"}
                </div>
                <div className='checkboxes'>
                  <IonCheckbox labelPlacement='stacked'>Outboard</IonCheckbox>
                  <IonCheckbox labelPlacement='stacked'>Inboard</IonCheckbox>
                </div>
              </IonCol>
            </IonCard>
            <div>{vesselMake}</div>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

