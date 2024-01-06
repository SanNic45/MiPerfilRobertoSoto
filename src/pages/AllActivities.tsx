import React from "react";
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonToolbar,
  IonMenuButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonButton,
} from "@ionic/react";

const AllActivities: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Activities</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonCard>
                <img alt="img" src="assets/img/img3.png" />
                <IonCardHeader>
                  <IonCardTitle>Thursday 18:00</IonCardTitle>
                  <IonCardSubtitle>Class Apps hybrid</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>Developer apps IONIC</p>
                  <IonItem lines="none">
                    <IonButton fill="clear">Complete Activity</IonButton>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AllActivities;
