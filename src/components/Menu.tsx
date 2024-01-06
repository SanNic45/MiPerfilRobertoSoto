import React from "react";
import { calendarOutline, addCircleOutline, personOutline } from 'ionicons/icons'; 
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonIcon,
  IonLabel,
} from "@ionic/react";
const Menu = () => {
  return (
    <IonMenu contentId="main-content" type="overlay">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
    <IonItem button={true} routerLink="/all-activities">
        <IonIcon icon={personOutline} slot="start" />
        <IonLabel>My Profile</IonLabel>
      </IonItem>
      <IonItem button={true} routerLink="/all-activities">
        <IonIcon icon={calendarOutline} slot="start" />
        <IonLabel>All Activities</IonLabel>
      </IonItem>
      <IonItem button={true} routerLink="/add-activities">
        <IonIcon icon={addCircleOutline} slot="start" />
        <IonLabel>Add Activities</IonLabel>
      </IonItem>
    </IonContent>
  </IonMenu>
  );
};

export default Menu;
