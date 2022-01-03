import React, {useEffect} from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton
} from '@ionic/react';

import * as v3dapp from '../head_model_01/app';
import {apps} from "ionicons/icons";

const Filter: React.FC = () => {

  useEffect(() => {
    (v3dapp.createApp() as any).then((app: any) => {
      console.log(app);
    });


  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Filter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>The filter page...</h2>

        <div id={v3dapp.CONTAINER_ID} style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}>

        </div>

      </IonContent>
    </IonPage>
  );
};

export default Filter;
