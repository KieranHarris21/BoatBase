import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox, IonContent, IonInput } from "@ionic/react";

export const Signup: React.FC = () => {

  return (
    <div className="auth-container">
      <IonCard className="auth-card">
        <IonCardHeader>
          <IonCardTitle>
            Signup
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonInput type="email" label="Email" labelPlacement="stacked" placeholder="email address"></IonInput>
          <div className="password-container">
            <IonInput type="password" label="Password" labelPlacement="stacked" placeholder="password"></IonInput>
          </div>
          <div className="auth-buttons">
            <IonButton fill='outline' href='/login'>cancel</IonButton>
            <IonButton color='primary'>Sign Up</IonButton>
          </div>
        </IonCardContent>
      </IonCard>
    </div>
  );
}