import { IonIcon, IonLabel, IonRouterOutlet, IonTab, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Home, Garage, Settings, MarketplaceHome, LoginPage, Signup, Login, ForgotPassword, MarketplaceItem } from '../pages';
import { Layout } from '../components';
import { Redirect, Route } from 'react-router';
import { boatSharp, cogSharp, homeSharp, storefrontSharp } from 'ionicons/icons';
import { useState } from 'react';
import { DataTable } from '../pages/dataTable/DataTable';

export const Routes: React.FC = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/garage">
            <Garage />
          </Route>
          <Route exact path="/marketplace">
            <MarketplaceHome />
          </Route>
          <Route exact path="/marketplace/item/:id">
            <MarketplaceItem />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/tables">
            <DataTable />
          </Route>
        </IonRouterOutlet>
        <Layout />
      </IonTabs>
    </IonReactRouter>
  )
}