import React from 'react';
import { useContext, useState, useEffect } from "react";
import {NavigationContainer} from "@react-navigation/native";
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Routes = () => {
    return(
        <NavigationContainer>
            <AppStack/>
        </NavigationContainer>
    );
}

export default Routes;