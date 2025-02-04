import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from "@ionic/react"
import { boatSharp, businessSharp, homeSharp, storefrontSharp } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export const BottomNav: React.FC = () => {
  const location = useLocation();
  const [authVisible, setAuthVisible] = useState<boolean>(false);

  useEffect(() => {
    if (location.pathname === '/login'
      || location.pathname === '/signup'
      || location.pathname === '/welcome'
    ) {
      setAuthVisible(true);
    } else {
      setAuthVisible(false);
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
          <IonTabButton tab="Local Dealer" href="/local-dealer">
            <IonIcon aria-hidden="true" icon={businessSharp} />
            <IonLabel>Local Dealer</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Marketplace" href="/marketplace">
            <IonIcon aria-hidden="true" icon={storefrontSharp} />
            <IonLabel>Marketplace</IonLabel>
          </IonTabButton>
          <IonTabButton tab="My Garage" href="/garage">
            <IonIcon aria-hidden="true" icon={boatSharp} />
            <IonLabel>My Garage</IonLabel>
          </IonTabButton>
        </IonTabBar>
      }
    </>
  )
}