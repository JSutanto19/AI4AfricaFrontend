import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Routes = () => {
  // get authcontext from AuthProvider
  const {user, setUser} = useContext(AuthContext);

  // initializing state is when app is syncing with firebase
  const [initializing, setInitializing] = useState(true);

  // updates the user in AuthContext in AuthProvider
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // When the app is syncing/ connecting with firebase, we don't know the next page to display to user
  // Not visible to user/ causes no lag because it takes a fraction of a sec

  if (initializing) return null;

  // When done initializing with firebase, we know the next state to display
  // Wraps Authstack and Appstack in navigation
  // Listens to authentication state and takes user to the homescreen(AppStack) if confirmed or to (AuthStack) to sigin or signup
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
