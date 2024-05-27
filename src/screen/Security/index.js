import React from 'react';
import {View} from 'react-native';
import Header from '../../helper/Header';
import {StylesGloble} from '../../helper/GlobleCss';
import PasswordTextfield from '../../helper/PasswordTextfield';
import Button from '../../helper/Button';

const Security = ({navigation}) => {
  return (
    <View style={StylesGloble.container}>
      <Header name={'Change Password'} />

      <View style={StylesGloble.marginscreen}>
      <View>
      <PasswordTextfield Placeholder="●●●●●●●●●●●●●●" name={'Current Password'} />
      </View>

      <View style={{marginTop:15}}>
      <PasswordTextfield Placeholder="arinna123" name={'New Password'} />
      </View>


      <View style={{marginTop:'130%'}}>
        <Button  label={'Save'}/>
      </View>

      </View>
    </View>
  );
};

export default Security;
