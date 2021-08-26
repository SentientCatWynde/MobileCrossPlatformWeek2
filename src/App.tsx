// import { Redirect, Route } from 'react-router-dom';
import { 
  IonApp, IonContent, 
  IonGrid, IonRow, IonCol, 
  IonButton, IonItem, IonLabel, IonInput, IonIcon,
  IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonCard, IonCardContent, 
  } from '@ionic/react';
  // not taken, *@ionic/react*: IonRouterOutlet
  // import { IonReactRouter } from '@ionic/react-router';
  // import Home from './pages/Home';
import {
    calculator, refreshOutline
  } from 'ionicons/icons';
import { useRef, useState } from 'react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

  // React.createElement("footerText", {style: { font-size: 'sm'} } );

  const App: React.FC = () => {
    // Conditional Rendering & useState
    const [ calculatedBMI, setCalculatedBMI ] = useState<number>(0);
    const [ bmiCategory, setBMICategory ] = useState<String>('BMI Category');
    const [ show, setShow ] = useState<Boolean>(false);
    const heightInputRef = useRef<HTMLIonInputElement>(null);
    const weightInputRef = useRef<HTMLIonInputElement>(null);

    const calculateBMI = () =>{
      const weight = weightInputRef.current!.value;
      const height = heightInputRef.current!.value;
      var bmiCategory : String = 'BMI Category';
      var meow : Boolean = true;
    
      if(!weight || !height) return;

      const bmi = +weight / ( ( +height / 100 ) * ( +height / 100 ) );
      
      if(bmi < 18.5){
        bmiCategory = 'Underweight';
      }else if(bmi < 25){
        bmiCategory = 'Normal || Healthy';
      }else if(bmi < 30){
        bmiCategory = 'Overweight';
      }else if(bmi > 30){
        bmiCategory = "Obese";
      }

      setCalculatedBMI(bmi);
      setBMICategory(bmiCategory);
      setShow(meow);
      console.log(bmi);
    };
    
    const reset = () =>{
      weightInputRef.current!.value = '';
      heightInputRef.current!.value = '';
      var defaultBMIVal : number = 0;
      var meow : Boolean = false;
      var defaultBMICategory : String = 'BMI Category';

      setShow(meow);
      setCalculatedBMI(defaultBMIVal);
      setBMICategory(defaultBMICategory);
    };

    return (
    <IonApp>
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
                  <IonInput ref = {heightInputRef} ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position= "floating" >
                    Input Body Weight [Kg]
                  </IonLabel>
        {/* INPUT WEIGHT OF USER TO CHECK FOR BMI */}
                  <IonInput  ref = {weightInputRef} ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow className = "ion-text-center ion-margin" >
              <IonCol>
        {/* Calculate your inputted BMI */}
                <IonButton onClick = {calculateBMI} color = 'warning' >
                  Count
                  <IonIcon slot = "start" icon = {calculator} ></IonIcon>
                </IonButton>
              </IonCol>
              <IonCol >
        {/* Reset Inputted BMI */}
                <IonButton onClick = {reset} color = 'warning' >
                  Reset
                  <IonIcon slot = "start" icon = {refreshOutline} ></IonIcon>
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol></IonCol>
              <IonCol>
                {show && 
                  <IonCard class = 'ion-text-center'>
                    <IonCardContent>
                      <p>BMI Value: {calculatedBMI}</p>
                      <h1>{bmiCategory}</h1>
                    </IonCardContent>
                  </IonCard>
                }
              </IonCol>
              <IonCol></IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
        <IonFooter>
          <IonToolbar color = 'warning' class = 'ion-text-sm-center ion-padding-horizontal'>
            Kalkulator BMI,  LAB Week 2 
          </IonToolbar>
        </IonFooter>
      </IonPage> 
    </IonApp>
    )
  };

export default App;
