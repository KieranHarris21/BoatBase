import { IonButton } from "@ionic/react";
import { FC } from "react";
import { useHistory } from "react-router";

export const Welcome: FC = () => {

  const history = useHistory();

  const login = () => {
    history.push('/login');
  }

  const signup = () => {
    history.push('/signup')
  }

  return (
    <div className="h-[100dvh] bg-[url('../../../resources/water-backdrop1.jpg')] w-full" >
      <div className="mx-auto text-center pt-[20dvh] text-gray-200">
        <div className=" text-3xl font-bold">Boat Base</div>
        <div>Everything Boating in one place</div>
      </div>
      <div className="w-10/12 mx-auto mt-[15dvh] py-5">
        <div className="w-full">
          <IonButton
            className="font-bold text-lg h-12"
            expand="full"
            shape="round"
            color="primary"
            onClick={login}
          >
            Log In
          </IonButton>
        </div>
        <div className="flex w-10/12 mx-auto justify-between items-center my-2 ">
          <div className="h-0.5 w-5/12 bg-gray-300"></div>
          <div className="w-max text-gray-300">or</div>
          <div className="h-0.5 w-5/12 bg-gray-300"></div>
        </div>
        <div>
          <IonButton
            className="font-bold text-lg h-12"
            expand="full"
            shape="round"
            color="medium"
            onClick={signup}
          >
            Create Account
          </IonButton>
        </div>
      </div>
    </div>
  );
}
