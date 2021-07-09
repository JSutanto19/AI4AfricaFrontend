
import React, {useState} from 'react';
import {Image,Text,StyleSheet, View, TouchableOpacity} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import * as firebase from 'firebase';


const LoginScreen = ({navigation}) =>{

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () =>{
    firebase.auth().signInWithEmailAndPassword(email,password).then(navigation.navigate("Onboarding"));//.catch(error);
  }

  return(
    <View style={styles.container}>
       <Image source={require('../assets/rn-social-logo.png')} style={styles.logo}/>
       <Text style={styles.text}>BASE</Text>
       <FormInput labelValue={email} onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email" iconType="mail" keyboardType="email-address" autoCapitalize="none" autoCorrect={false}
       />
       <FormInput labelValue={password} onChangeText={(userPassowrd) => setPassword(userPassowrd)}
        placeholderText="Password" iconType="lock" secureTextEntry={true}
       />
       <FormButton buttonTitle="Sign In" onPress={handleLogin}/>

       <TouchableOpacity style={styles.forgotButton} onPress={() => alert("Forgot Password clicked!")}>
          <Text style={styles.navButtonText}> Forgot Password?</Text>
       </TouchableOpacity>

       <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => alert("Facebook Login clicked")}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => alert("Google Login clicked")}
          />


       <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.navButtonText}> Don't have and account. Create here</Text>
       </TouchableOpacity>

    </View>
  );
}

export default LoginScreen;


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
  },
});