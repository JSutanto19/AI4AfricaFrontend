import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const AddPostScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Add Post Screen</Text>
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
  }    
);

