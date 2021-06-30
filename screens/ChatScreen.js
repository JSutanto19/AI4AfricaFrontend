import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const ChatScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Chat Screen</Text>
        </View>
    )
}

export default ChatScreen;

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
