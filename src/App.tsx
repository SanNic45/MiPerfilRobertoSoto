import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import AllActivities from "./pages/AllActivities";
import AddActivities from "./pages/AddActivities";
import MyProfile from "./pages/MyProfile";
import Menu from "./components/Menu";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    <Menu />
      <IonRouterOutlet  id="main-content">
        <Route exact path="/all-activities" component={AllActivities} />
        <Route exact path="/add-activities" component={AddActivities} />
        <Route exact path="/myProfile" component={MyProfile} />
        <Route exact path="/">
          <Redirect to="/add-activities" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
