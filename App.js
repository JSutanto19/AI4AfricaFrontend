// import * as React from 'react';
// import { Button, View, Text, Image,
//   TouchableOpacity, 
//   TextInput,
//   Platform,
//   StyleSheet ,
//   StatusBar,
//   Alert } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Onboarding from 'react-native-onboarding-swiper';

// import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'expo';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';
// import { useTheme } from 'react-native-paper';


// function OnboardingScreen({ navigation }) {
//   return (
//     <Onboarding
//     onDone={()=> navigation.navigate('Login')}
//     onSkip={()=> navigation.replace('Login')}
//     pages={[
//       {
//         backgroundColor: '#fff',
//         image: <Image source={require('./images/circle.png')} />,
//         title: 'Onboarding',
//         subtitle: 'Done with React Native Onboarding Swiper',
//       },
//       {
//         backgroundColor: '#fe6e58',
//         image: <Image source={require('./images/square.png')} />,
//         title: 'The Title',
//         subtitle: 'This is the subtitle that sumplements the title.',
//       },
//       {
//         backgroundColor: '#999',
//         image: <Image source={require('./images/triangle.png')} />,
//         title: 'Triangle',
//         subtitle: "Beautiful, isn't it?",
//       },
//     ]}
//   />
//   );
// }

// function LoginScreen({ navigation }) {
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1, 
//       backgroundColor: '#009387'
//     },
//     header: {
//         flex: 1,
//         justifyContent: 'flex-end',
//         paddingHorizontal: 20,
//         paddingBottom: 50
//     },
//     footer: {
//         flex: 3,
//         backgroundColor: '#fff',
//         borderTopLeftRadius: 30,
//         borderTopRightRadius: 30,
//         paddingHorizontal: 20,
//         paddingVertical: 30
//     },
//     text_header: {
//         color: '#fff',
//         fontWeight: 'bold',
//         fontSize: 30
//     },
//     text_footer: {
//         color: '#05375a',
//         fontSize: 18
//     },
//     action: {
//         flexDirection: 'row',
//         marginTop: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f2f2f2',
//         paddingBottom: 5
//     },
//     actionError: {
//         flexDirection: 'row',
//         marginTop: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#FF0000',
//         paddingBottom: 5
//     },
//     textInput: {
//         flex: 1,
//         marginTop: Platform.OS === 'ios' ? 0 : -12,
//         paddingLeft: 10,
//         color: '#05375a',
//     },
//     errorMsg: {
//         color: '#FF0000',
//         fontSize: 14,
//     },
//     button: {
//         alignItems: 'center',
//         marginTop: 50
//     },
//     signIn: {
//         width: '100%',
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 10
//     },
//     textSign: {
//         fontSize: 18,
//         fontWeight: 'bold'
//     }, 
//     loginScreenButton:{
//       marginRight:100,
//       marginLeft:100,
//       marginTop:10,
//       paddingTop:10,
//       paddingBottom:10,
//       backgroundColor:'#009387',
//       borderRadius:10,
//       borderWidth: 1,
//       borderColor: '#fff'
//     },
//     loginText:{
//         color:'#fff',
//         textAlign:'center',
//         paddingLeft : 10,
//         paddingRight : 10
//     }, 
//     parent: {
//       width: 300,
//       height: 500,
//       margin: 50,
//     }, 
//   });

//   const [data, setData]= React.useState({email:'', password:'', check_textInputChange: false, secureTextEntry: true});

//   const textInputChange = (val) => {
//     if(val.length !== 0){
//       setData({...data, email: val, check_textInputChange: true });
//     } else{
//       setData({...data, email: val, check_textInputChange: false });
//     }
//   }

//   const handlePasswordChange = (val) => { 
//     setData({...data, password: val});
//   }

//   const updateSecureTextEntry = (val) => {
//     setData({...data, secureTextEntry: !data.secureTextEntry});
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.text_header}>Welcome to Social App!</Text>
//       </View>
//       <View style={styles.footer}>
//         <Text style={styles.text_footer}>Email</Text>
//         <View style={styles.action}>
//            <FontAwesome name="user-o" color="#05375a" size={20}/>
//            <TextInput placeholder="Your Email" style={styles.textInput} autoCapitalize={'none'} onChangeText={(val) => textInputChange(val)}/>
//            { data.check_textInputChange ?
//            <Animatable.View animation="bounceIn">
//                     <Feather name="check-circle" color='green'/>
//            </Animatable.View>
//            : null}
//         </View>
//         <Text style={[styles.text_footer, {marginTop:35}]}>Password</Text>
//         <View style={styles.action}>
//            <FontAwesome name="lock" color="#05375a" size={20}/>
//            <TextInput placeholder="Your Password" style={styles.textInput} autoCapitalize={'none'} secureTextEntry={data.secureTextEntry ? true : false} onChangeText={(val) => handlePasswordChange(val)}/>
//            <TouchableOpacity onPress={updateSecureTextEntry}> 
//             {data.secureTextEntry ?
//               <Feather name="eye-off" color='grey' /> : <Feather name="eye" color='grey' /> 
//             }
//            </TouchableOpacity>
//         </View>
//         <View style={styles.parent}>
//           <TouchableOpacity
//             style={styles.loginScreenButton}
//             onPress={() => navigate('HomeScreen')}
//             underlayColor='#fff'>
//             <Text style={styles.loginText}>Login</Text>
//         </TouchableOpacity>
//         </View>
//         <View style={styles.parent}>
//           <TouchableOpacity
//             style={styles.loginScreenButton}
//             onPress={() => navigate('HomeScreen')}
//             underlayColor='#fff'>
//             <Text style={styles.loginText}>Sign Up</Text>
//         </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Onboarding" component={OnboardingScreen} />
//         <Stack.Screen name="Login" component={LoginScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }



import React , {useState} from 'react';
import Providers from './navigation';
//import * as firebase from 'firebase';
import * as firebase from 'firebase';

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
