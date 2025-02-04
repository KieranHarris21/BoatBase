import {
  IonButton,
  IonContent,
  IonInfiniteScrollContent,
  IonInput,
  IonInputPasswordToggle,
  IonPage
} from "@ionic/react";
import { FC, useEffect, useState } from "react";
import { useHistory } from "react-router";

export const Login: FC = () => {

  const history = useHistory();
  //state
  const [disabled, setDisabled] = useState<boolean>(true);

  // TODO: use this validation in signup page

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailIsValid, setEmailIsValid] = useState<boolean>();
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>();

  useEffect(() => {
    if (emailIsValid == true && passwordIsValid == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [emailIsValid, passwordIsValid]);

  const validateEmail = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  };

  const validatePassword = (password: string) => {
    let regex = /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])[\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{8,25}$/;
    if (regex.test(password)) {
      return true;
    } else {
      return null;
    }
  };

  const validate = (event: Event, type: string) => {
    const value = (event.target as HTMLInputElement).value;

    switch (type) {
      case "password":
        setPassword(value);
        setPasswordIsValid(undefined);
        if (value === '') return;
        validatePassword(value) !== null ? setPasswordIsValid(true) : setPasswordIsValid(false);
        break;
      case "email":
        setEmail(value);
        setEmailIsValid(undefined);
        if (value === '') return;
        validateEmail(value) !== null ? setEmailIsValid(true) : setEmailIsValid(false);
        break;
    }
  };

  const login = async () => {
    // const authResponse = await Firebase.authWithToken({
    //   requestData: {
    //     email: email,
    //     password: password
    //   }
    // });

    // if (authResponse == 'Success') {
    history.push('/home');
    // } else {
    //   console.log(authResponse);
    // }
  };

  return (
    <IonPage>
      <IonContent>
        <IonInfiniteScrollContent>
          <div className="h-[100dvh] pt-12 w-full relative bg-[url('../../../resources/water-backdrop1.jpg')] text-gray-200">
            <div className="w-full">
              <div className="w-max mx-auto">
                {/* <DarkDekkoLogo size={40} style={""} /> */}
              </div>
            </div>
            <div>
              <div className="mt-[12dvh] text-primary text-3xl font-extrabold w-10/12 mx-auto">
                Log In
              </div>
            </div>
            <div>
              <form id="form" typeof="submit">
                <div className="w-10/12 mx-auto mt-[10dvh] text-start">
                  <div className="w-full mt-5 flex flex-col">
                    <IonInput
                      type="email"
                      fill="outline"
                      label="Email"
                      labelPlacement="stacked"
                      onIonInput={(e) => validate(e, "email")}
                    />
                  </div>
                  <div className="w-full mt-5 flex flex-col">
                    <IonInput
                      type="password"
                      fill="outline"
                      label="Password"
                      labelPlacement="stacked"
                      onIonInput={(event) => validate(event, "password")}
                    >
                      <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
                    </IonInput>
                  </div>
                </div>
                <div className="w-10/12 mx-auto mt-5">
                  <IonButton
                    className="w-full"
                    shape="round"
                    onClick={login}
                    disabled={disabled}
                  >Log in
                  </IonButton>
                </div>
              </form>
            </div>
            <div className="flex flex-row text-sm text-center mt-5 w-max mx-auto">
              <div>Forgot password?</div>
              <div
                className="font-semibold text-primary ml-1"
                onClick={() => history.push('/reset-password')}
              >Click here
              </div>
            </div>
            <div className="flex flex-row text-sm text-center mt-[30dvh] w-max mx-auto">
              <div>
                Don't have an account?
              </div>
              <div
                className="font-semibold text-primary ml-1"
                onClick={() => history.push('/register')}
              >Sign up
              </div>
            </div>
          </div>
        </IonInfiniteScrollContent>
      </IonContent >
    </IonPage >
  )
}
