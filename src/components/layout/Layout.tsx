import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from "@ionic/react"
import { boatSharp, cogSharp, homeSharp, storefrontSharp } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export const Layout: React.FC = () => {
  const location = useLocation();
  const [authVisible, setAuthVisible] = useState<boolean>(false);

  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/signup') {
      setAuthVisible(true);
    }
  }, [location]);

  return (
    <>
      {authVisible ? <></> :
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/home">
            <IonIcon aria-hidden="true" icon={homeSharp} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Garage" href="/garage">
            <IonIcon aria-hidden="true" icon={boatSharp} />
            <IonLabel>My Garage</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Marketplace" href="/marketplace">
            <IonIcon aria-hidden="true" icon={storefrontSharp} />
            <IonLabel>Marketplace</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Settings" href="/settings">
            <IonIcon aria-hidden="true" icon={cogSharp} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      }
    </>
  )
}