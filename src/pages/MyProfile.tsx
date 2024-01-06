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
  IonLabel,
  IonInput,
} from "@ionic/react";
const MyProfile = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Activities</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonCard>
                <img
                  alt="img"
                  src="/assets/img/img1.png"
                  style={{ borderRadius: "50%", width: "9rem" }}
                />
                <IonCardHeader>
                  <IonCardTitle>Personal Information</IonCardTitle>
                  <IonCardSubtitle>Roberto Soto</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem>
                    <IonLabel position="floating">First Name</IonLabel>
                    <IonInput value="Roberto" disabled />
                  </IonItem>
                  <IonItem>
                    <IonLabel position="floating">Last Name</IonLabel>
                    <IonInput value="Soto" disabled />
                  </IonItem>
                  <IonItem>
                    <IonLabel position="floating">ID Number</IonLabel>
                    <IonInput value="1723381727" disabled />
                  </IonItem>
                  <IonItem>
                    <IonLabel position="floating">Phone Number</IonLabel>
                    <IonInput value="09999999" disabled />
                  </IonItem>
                  <IonItem>
                    <IonLabel position="floating">Work Experience</IonLabel>
                    <IonInput value="Dev" disabled />
                  </IonItem>
                  <IonItem>
                    <IonLabel position="floating">Address</IonLabel>
                    <IonInput value="Sur de Quito" disabled />
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

export default MyProfile;
