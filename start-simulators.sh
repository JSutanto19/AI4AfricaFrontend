#!/bin/bash
declare -a simulators=("371C3CCC-1A01-4195-B9A8-25EA0CB737FE" "F638CAF2-C789-42AB-89BD-22AF49D79EDD")

for i in "${simulators[@]}"
do
    xcrun instruments -w $i
    xcrun simctl install $i ~/.expo/ios-simulator-app-cache/Exponent-2.19.6.tar.app
    xcrun simctl openurl $i exp://127.0.0.1:19000      
done