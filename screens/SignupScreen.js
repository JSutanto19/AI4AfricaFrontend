import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import CancelButton from '../components/CancelButton';
import * as firebase from 'firebase';

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSignup = () => {
      firebase.auth()
      .createUserWithEmailAndPassword(email,password)
      .then(alert("Navigate to home screen"))
      .catch(alert("Sign up failed"));
    }

   return(
     <View style={styles.container}>
         <Text style={styles.text}> Create an Account</Text>
         <FormInput labelValue={email} onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText="Email" iconType="user" keyboardType="email-address" autoCapitalize="none" autoCorrect={false}
         />
         <FormInput labelValue={password} onChangeText={(userPassowrd) => setPassword(userPassowrd)}
        placeholderText="Password" iconType="lock" secureTextEntry={true}
       />
       <FormInput labelValue={password} onChangeText={(userPassowrd) => setPassword(userPassowrd)}
        placeholderText="Confirm Password" iconType="lock" secureTextEntry={true}
       />

        <FormButton buttonTitle="Sign Up" onPress={()=> {handleSignup()}}/>
        <CancelButton buttonTitle="Cancel" onPress={()=> navigation.navigate("Login")}/>

        <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]} onPress={() => alert("Policy clicked")}>
          Privacy Policy
        </Text>
      </View>
     </View>
   );
}
export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'Cochin',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    color: 'grey',
  },
});
