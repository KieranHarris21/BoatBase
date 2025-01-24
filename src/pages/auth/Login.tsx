import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox, IonContent, IonInput } from "@ionic/react";
import "./Auth.css";

export const Login: React.FC = () => {

  const forgotPassword = () => {
    console.log("forgot password");
  }

  const login = () => {

  }

  return (
    <div className="auth-container">
      <IonCard className="auth-card">
        <IonCardHeader>
          <IonCardTitle>
            Login
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonInput type="email" label="Email" labelPlacement="stacked" placeholder="email address"></IonInput>
          <div className="password-container">
            <IonInput type="password" label="Password" labelPlacement="stacked" placeholder="password"></IonInput>
            <div className="forgot-password" onClick={forgotPassword}>Forgot Password</div>
          </div>
          <IonCheckbox className="remember-me" justify="space-between"><span>Remember me?</span></IonCheckbox>
          <div className="signup-text">
            <span>Don't have an account? <a href="/signup">Sign Up</a></span>
          </div>
          <div className="auth-buttons">
            <IonButton fill='outline'>cancel</IonButton>
            <IonButton color='primary' href='/'>Login</IonButton>
          </div>
        </IonCardContent>
      </IonCard>
    </div>
  );
}