import React, {useState}from 'react'
import { View, Text, StyleSheet, Platform, ActivityIndicator, Alert } from 'react-native';
import {InputWrapper, InputField, AddImage, StatusWrapper, SubmitBtn, SubmitBtnText} from '../styles/AddPost';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';



const AddPostScreen = ({navigation}) => {
   
  const [pickedImagePath, setPickedImagePath] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [post, setPost] = useState(null);



    const showImagePicker = async () => {
    // Ask the user for the permission to access the media library 
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      // uploadImage(result.uri).then(()=> Alert.alert('sucess')).catch((error) => Alert.alert(error));
    }
  }
  
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
      // uploadImage(result.uri, 'test-image').then(()=> Alert.alert('sucess')).catch((error) => Alert.alert(error));
    }
  }


  const submitPost = async () => {
    const imageUrl = await uploadImage(pickedImagePath);
    alert(imageUrl);

    if(imageUrl !== null){
      // imageUrl = pickedImagePath; 
      const url = pickedImagePath;
    }


    firebase.firestore()
    .collection('posts')
    .add({
      userId: firebase.auth().currentUser.uid,
      post: post,
      postImg: pickedImagePath,
      postTime: firebase.firestore.FieldValue.serverTimestamp(),
      likes: null,
      comments: null,
    })
    .then(() => {
      alert("Here");
      console.log('Post Added!');
      alert(
        'Post published!',
        'Your post has been published Successfully!',
      );
      setPost(null);
      navigation.navigate("RN Social",{added: true})
    })
    .catch((error) => {
      console.log('Something went wrong with added post to firestore.', error);
    });
  }

  const uploadImage = async (uri) => {

    if(uri == null){
      return null;
    }

    const imageName = "image-" + Math.floor(Math.random() * 10000).toString();

    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = firebase.storage().ref().child("images/" + imageName);
    return ref.put(blob);
  }

  

    return (
        <View style={styles.container}>
          <InputWrapper>
            {pickedImagePath !== null ? <AddImage source={{uri: pickedImagePath}}/> : null}
            <InputField  
              placeholder="What's on your mind?"
              multiline 
              numberOfLines={4}
              onChangeText={(content) => setPost(content)}
              value={post}
            />
            
            {uploading ? (
              <StatusWrapper>
                <Text>{transferred} % Completed!</Text>
                <ActivityIndicator size="large" color="#0000ff" />
              </StatusWrapper>
            ) : (
              <SubmitBtn style={{marginTop: 25}} onPress={submitPost}>
                <SubmitBtnText>Post</SubmitBtnText>
              </SubmitBtn>
            )}

          </InputWrapper>

          <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Take Photo" onPress={openCamera}>
            <Icon name="camera-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Choose Photo" onPress={showImagePicker}>
            <Icon name="md-images-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
        </View>
    )
}

export default AddPostScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    actionButtonIcon:{
      fontSize: 20,
      height: 22,
      color: 'white',
    }
  }    
);

