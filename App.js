import React, {useState} from 'react';
// Dont add expo-font to package.json
import * as Font from 'expo-font'
import {AppLoading} from 'expo'

import {TodoState} from "./src/context/todo/TodoState";
import {ScreenState} from "./src/context/screens/ScreenState";
import {MainLayout} from "./src/MainLayout";

async function loadApplication() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  })
}

export default function App() {
  const [isReady, setIsReady] = useState(false);


  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={console.warn}
        onFinish={() => setIsReady(true)}
      />
    )
  }

  return (
    <ScreenState>
      <TodoState>
        <MainLayout/>
      </TodoState>
    </ScreenState>
  );
}