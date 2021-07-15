import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const ExplorePage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={[styles.container, {backgroundColor:'#fff'}]}>
                <TouchableOpacity onPress={() => navigation.navigate('Translate')}>
                    <Ionicons name="language-outline" size={80} color={'#2e64e5'}/>
                    <Text style={styles.text}>Translate</Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.container]}>
                <TouchableOpacity style={{marginLeft: 15}} onPress={() => navigation.navigate('ChatBot')}>
                    <Ionicons style={{marginLeft: 60}} name="add-circle-outline" size={80} color={'#2e64e5'}/>
                    <Text style={styles.text}>Ask for health advice</Text>
                </TouchableOpacity>
            </View> 

        </View>

    )
}

export default ExplorePage;

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    } , 
    text : {
        fontSize: 24,
        marginTop: 10,
        color: '#2e64e5'
    }
})
