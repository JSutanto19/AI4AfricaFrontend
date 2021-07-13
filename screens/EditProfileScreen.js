import React, {useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity, ImageBackground, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from 'react-native-paper';
import { createNavigatorFactory } from '@react-navigation/core';
import * as firebase from 'firebase';
import 'firebase/firestore'

const EditProfileScreen = ({navigation}) => {
    const [image, setImage] = useState('https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg');
    const {colors} = useTheme();
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState();

    const handleSubmit = () => {
        const uname = firstName + '' + lastName;
        firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set({
            
            name : uname,
            phone,
            email,
            country,
            city,

            }
        ).then( navigation.goBack()).catch(error => Alert.alert(error))
    }

    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
                <View
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ImageBackground
                    source={{
                      uri: image,
                    }}
                    style={{height: 100, width: 100}}
                    imageStyle={{borderRadius: 15}}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Icon
                        name="camera"
                        size={35}
                        color="#fff"
                        style={{
                          opacity: 0.7,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderWidth: 1,
                          borderColor: '#fff',
                          borderRadius: 10,
                        }}
                      />
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
              <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
                John Doe
              </Text>
            </View>
    
            <View style={styles.action}>
              <FontAwesome  style={{marginLeft: 10}} name="user-o" color={colors.text} size={20} />
              <TextInput
                placeholder="First Name"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                onChangeText={(fname) => setFirstName(fname)}
              />
            </View>
            <View style={styles.action}>
              <FontAwesome  style={{marginLeft: 10}} name="user-o" color={colors.text} size={20} />
              <TextInput
                placeholder="Last Name"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                onChangeText={(lname) => setLastName(lname)}
              />
            </View>
            <View style={styles.action}>
              <Feather style={{marginLeft: 10}} name="phone" color={colors.text} size={20} />
              <TextInput
                placeholder="Phone"
                placeholderTextColor="#666666"
                keyboardType="number-pad"
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                onChangeText={(ph) => setPhone(ph)}
              />
            </View>
            <View style={styles.action}>
              <FontAwesome style={{marginLeft: 10}} name="envelope-o" color={colors.text} size={20} />
              <TextInput
                placeholder="Email"
                placeholderTextColor="#666666"
                keyboardType="email-address"
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                onChangeText={(eml) => setEmail(eml)}
              />
            </View>
            <View style={styles.action}>
              <FontAwesome style={{marginLeft: 10}} name="globe" color={colors.text} size={20} />
              <TextInput
                placeholder="Country"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                onChangeText={(ctry) => setCountry(ctry)}
              />
            </View>
            <View style={styles.action}>
              <Icon style={{marginLeft: 10}} name="map-marker-outline" color={colors.text} size={20} />
              <TextInput
                placeholder="City"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                onChangeText={(cty) => setCity(cty)}
              />
            </View>

            <TouchableOpacity style={styles.commandButton} onPress={handleSubmit}>
              <Text style={styles.panelButtonTitle}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.navigate("Profile")}>
              <Text style={styles.panelButtonTitle}>Cancel</Text>
            </TouchableOpacity>
        </View>
      );
}

export default EditProfileScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#8bc34a',
      alignItems: 'center',
      marginTop: 10,
    },
    cancelButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        marginTop: 10,
      },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
    },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      // elevation: 5,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#4d4d4d',
      paddingBottom: 5,
    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5,
    },
    textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
    },
  });
