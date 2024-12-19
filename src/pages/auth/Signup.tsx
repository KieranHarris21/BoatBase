import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox, IonContent, IonInput } from "@ionic/react";
import "./Auth.css";

export const Signup: React.FC = () => {

  const forgotPassword = () => {
    console.log("forgot password");
  }

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
        </IonCardContent>
      </IonCard>
    </div>
  );
}