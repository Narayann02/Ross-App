import React, { useEffect, useRef, useState } from 'react'
import { Text, TextInput, StyleSheet, View, Animated, Easing, Image, TouchableOpacity } from 'react-native';
import LocationGrey from '../assest/svg/LocationGrey.svg';



const AddressTextField = (props) => {

    const { label, errorText, value, style, type, onBlur, name, Placeholder, onFocus, ...restOfProps } = props
    const [isFocused, setIsFocused] = useState(false);
    const [securetext, setsecuretext] = useState(true);

    // const inputRef = useRef(null)
    // const focusAnim = useRef(new Animated.Value(0)).current

    let keypadtype = 'default';
    let multilineobj = false;
    // useEffect(() => {

    //     Animated.timing(focusAnim, {
    //         toValue: isFocused || !!value ? 1 : 0,
    //         duration: 150,
    //         easing: Easing.bezier(0.4, 0, 0.2, 1),
    //         useNativeDriver: true,
    //     }).start()
    // }, [focusAnim, isFocused, value])

    // let color = '#B9C4CA'
    // if (errorText) {
    //     color = '#B00020'
    // }

    // const checkvalue = (text) => {
    //     if (text == '') {
    //         return false;
    //     } else if (text == null) {
    //         return false;
    //     } else if (text == undefined) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }
    return (
        <View style={{ position: "relative" }} >
            <Text style={styles.label}>{name}</Text>
            <TextInput
                style={[styles.input2]}
                // ref={inputRef}
                
                multiline={multilineobj}
                keyboardType={keypadtype}
                placeholder={Placeholder}
                placeholderTextColor="#B0B0B0"
                type={type}
                {...restOfProps}
                // secureTextEntry={securetext}
                value={value}
                // onBlur={(event) => {
                //     setIsFocused(false)
                //     onBlur?.(event)
                // }}
                // onFocus={(event) => {
                //     setIsFocused(true)
                //     onFocus?.(event)
                // }}
            />
            <View style={{ position: "absolute", top: 43, right: 10,}}>
                <TouchableOpacity
         style={{ zIndex: 999999 }} >
                   <LocationGrey />
                </TouchableOpacity>
            </View>
            {/* {!!errorText && <Text style={styles.error}>{errorText}</Text>} */}

        </View>
    )
}

const styles = StyleSheet.create({
    input2: {
        padding: 10,
        borderRadius: 8,
        fontSize: 16,
        color: "#5D5D5D",
        paddingLeft: 15,
        paddingRight: 38,
        borderWidth: 1, borderColor: "#5D5D5D",
        height: 50,
        marginTop: 2,
    
        
        
    },
    labelContainer: {
        position: 'absolute',
        top: -10,
        left: -15
    },
    borderview: {
        borderColor: "#5D5D5D",
        borderWidth: 1,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 8,
        color: "#242A37"
    },
    error: {
        marginTop: 4,
        marginLeft: 12,
        fontSize: 14,
        color: '#B00020',
        fontFamily: 'Poppins-Regular',
    },
    newlable: {
        zIndex: 999,
        position: 'absolute',
        top: 16,
        left: 14
    },
})

export default AddressTextField;