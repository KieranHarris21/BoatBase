import { IonButton, IonButtons, IonCard, IonCheckbox, IonCol, IonContent, IonHeader, IonInput, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import { FC, useRef, useState } from "react"

export const AddVesselModal: FC = () => {

  const [data, setData] = useState<any[]>([]);

  const addData = () => {

    var boats: any[] = [];

    for (var i = 0; i < 100; i++) {
      boats[i] = { id: i, make: "Seadoo", model: `Gti ${i}`, type: "Jetski" };
    }

    setData(boats);
  }

  const modal = useRef<HTMLIonModalElement>(null);

  // modal state
  const [vesselMake, setVesselMake] = useState<string>();
  const [vesselModel, setVesselModel] = useState<string>();

  const clearData = () => {
    setData([]);
  }

  const onWillDismiss = (e: Event) => {
    console.log(e);
  }


  return (
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
  );
}