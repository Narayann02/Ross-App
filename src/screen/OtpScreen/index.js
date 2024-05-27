import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {StylesGloble} from '../../helper/GlobleCss';
import Header from '../../helper/Header';
import OTPTextView from 'react-native-otp-textinput';
import Button from '../../helper/Button';

const OtpScreen = ({navigation}) => {
  return (
    <View style={StylesGloble.whitescreen}>
      <Header />

      <View style={StylesGloble.marginscreen}>
        <View>
          <Text style={StylesGloble.font248009846D7}>Verification Code</Text>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Text
              style={{
                ...StylesGloble.font14500g6D6D6D,
                lineHeight: 20,
                width: 250,
                textAlign: 'center',
              }}>
              Enter the 4-digit code sent to you at 99999-99999{' '}
            </Text>
          </View>
        </View>

        <OTPTextView
        inputCount={4}
          containerStyle={{padding: 25, marginTop: 20,}}
          textInputStyle={{
            borderBottomWidth: 1,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#5D5D5D',
            color:'#5D5D5D',
           
           }}
           autoFocus={true}
           tintColor="#5D5D5D"
           offTintColor="#B0B0B0"
           keyboardType="numeric"
          
        />

        <View style={{marginTop: 0}}>
          <Button
            label={'Continue'}
            onPress={()=>navigation.navigate('SignupScreen')}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text style={StylesGloble.font14400grey5D5D5D}>
            Time Remaining 01:45
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: '#9846D7',
                marginLeft: 5,
              }}>
              Resend OTP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OtpScreen;
