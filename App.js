

import React , {useState} from 'react';
import Providers from './navigation';
import * as firebase from 'firebase';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

var firebaseConfig = {
  apiKey: "AIzaSyAnk1geuKsuiQOMQlM4t3T56MVxlzMtgjs",
  authDomain: "ai4africa-social-app.firebaseapp.com",
  projectId: "ai4africa-social-app",
  storageBucket: "ai4africa-social-app.appspot.com",
  messagingSenderId: "141154416688",
  appId: "1:141154416688:web:658b0c634a207ae8ae55f5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isAuthenticationReady, setAuthenticationReady] = useState(false);
  
  // //load firebase
  // if(!firebase.apps.length){
  //   firebase.auth().onAuthStateChanged((user) => {
  //     setAuthenticated(!!user);
  //     setAuthenticationReady(true);
  //   })
  // }

  return <Providers />;
}

export default App;



