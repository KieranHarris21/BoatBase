import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ExploreContainer } from '../../components';

export const Settings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton href='/login'>Login</IonButton>
        <ExploreContainer name="Settings page" />
      </IonContent>
    </IonPage>
  );
};
