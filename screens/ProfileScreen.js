import React, {useState} from 'react';
import { View, StyleSheet, SafeAreaView, Alert} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import FormButton from '../components/EditButton';
import SignoutButton from '../components/SignoutButton';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as firebase from 'firebase';
import {StackActions} from '@react-navigation/native'




const ProfileScreen = ({navigation}) => {

  // const resetAction = StackActions.reset({
  //   index: 0,
  //   actions: [NavigationActions.navigate({ routeName: 'Login' })],
  // });

  const handleSignout = () => {
     firebase.auth().signOut().then(navigation.navigate('Login')).catch(error => Alert.alert(error))
  }

    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image 
                source={{
                  uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
                }}
                size={80}
              />
            <View style={{marginLeft: 20}}>
              <Title style={[styles.title, {marginTop: 15, marginBottom: 5}]}>John Doe</Title>
              <Caption style={styles.caption}>@j_doe</Caption>
            </View>
            </View>
          </View>

           <View style={styles.userInfoSection}>
             <View style={styles.row}> 
                 <Icon name="map-marker-radius" color="#777777" size={20}/>
                <Text style={{color:'#777777', marginLeft:20}}>Madison, Wisconsin</Text>
             </View>
             <View style={styles.row}> 
                 <Icon name="phone" color="#777777" size={20}/>
                <Text style={{color:'#777777', marginLeft:20}}>(608) 123 4567</Text>
             </View>
             <View style={styles.row}> 
                 <Icon name="email" color="#777777" size={20}/>
                <Text style={{color:'#777777', marginLeft:20}}>john_doe@gmail.com</Text>
             </View>
           </View>

           <FormButton buttonTitle="Edit Profile" onPress={() => navigation.navigate("Edit Profile")}/>
           <SignoutButton buttonTitle="Sign Out" onPress={handleSignout}/>


        </SafeAreaView>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
