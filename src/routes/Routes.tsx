import { IonRouterOutlet, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Home, Garage, Settings, MarketplaceHome, Signup, Login, ForgotPassword, MarketplaceItem } from '../pages';
import { Layout } from '../components';
import { Redirect, Route } from 'react-router';
import { DataTable } from '../pages/dataTable/DataTable';
import { Welcome } from '../pages/welcome/Welcome';
// import { Protected } from './Protected';

export const Routes: React.FC = () => {

  // TODO: create a way to register device back button click and navigate to previous page

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/welcome">
            <Welcome />
          </Route>
          <Route exact path="/home">
            {/* <Protected><Home /></Protected> */}
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