import { 
  IonContent, 
  IonGrid, IonRow, IonCol, IonButton,
  IonItem, IonLabel, IonInput, IonIcon,
  IonHeader, IonPage, IonTitle, IonToolbar
} from '@ionic/react';
import {
  calculator, refreshOutline
} from 'ionicons/icons';
// import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar color = 'warning' >
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className = "ion-padding" >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">BMI Calc</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Reads src/components/ExploreContainer.tsx */}
        {/* <ExploreContainer /> */}
        <IonGrid >
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position= "floating" >
                  Input Body Height [cm]
                </IonLabel>
      {/* INPUT HEIGHT OF USER TO CHECK FOR BMI */}
                <IonInput ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position= "floating" >
                  Input Body Weight [Kg]
                </IonLabel>
      {/* INPUT WEIGHT OF USER TO CHECK FOR BMI 
      *   Reference must refer to the same tsx file
      */}
                <IonInput  ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className = "ion-text-center ion-margin" >
            <IonCol>
              <IonButton color = 'warning' >
                Count
                <IonIcon slot = "start" icon = {calculator} ></IonIcon>
              </IonButton>
            </IonCol>
            <IonCol >
              <IonButton color = 'warning' >
                Reset
                <IonIcon slot = "start" icon = {refreshOutline} ></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
