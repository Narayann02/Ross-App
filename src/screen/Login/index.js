import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {StylesGloble} from '../../helper/GlobleCss';
import TextField from '../../helper/TextField';
import PasswordTextField from '../../helper/PasswordTextfield';
import Check from '../../assest/svg/Check.svg';
import UnCheck from '../../assest/svg/UnCheck.svg';
import Button from '../../helper/Button';

const Login = ({navigation}) => {
  const [keepme, setkeepme] = useState(false);
  const [selectedtab, setselectedtab] = useState(0);
  const [btndisable, setbtndisable] = useState(false);
  const [inputnumber, setInputnumber] = useState({
    value: null,
    message: '',
    isValid: false,
});
const isValidPhoneNumber = (phone) => {
  return /^\d{10}$/.test(phone);
}
const validatenumber = _in => {
  try {
      setInputnumber(prev => ({ ...prev, value: _in }));
      if (!_in) {
          setInputnumber(prev => ({ ...prev, isValid: true, message: "Please enter number" }));
      }else if (!isValidPhoneNumber(_in)) {
          setInputnumber(prev => ({ ...prev, isValid: true, message: "Please enter correct phone number" }));
      }
      else if (_in.length === 0) {
          setInputnumber(prev => ({ ...prev, isValid: true, message: "Please enter number" }));
      }
      else {
          setInputnumber(prev => ({ ...prev, isValid: false, message: '' }));
      }
  } catch (error) {
  }
  checkvalidation()
};

const checkvalidation = () => {
  if (inputnumber.value != null ) {
      setbtndisable(true);
  } else {
      setbtndisable(false);
  }
}


  

  return (
    <View style={StylesGloble.container}>
      <View style={StylesGloble.whitescreen}>
        <View style={{...StylesGloble.marginscreen, marginTop: '10%'}}>
          <View style={{alignSelf: 'center', marginTop: 20}}>
            <Text style={StylesGloble.font248009846D7}>Login</Text>
            <Text style={{...StylesGloble.font14500g6D6D6D, marginTop: 10}}>
              Welcome back to the app
            </Text>
          </View>

          <View style={{marginTop: 20}}>
            <TextField 
             name={'Phone Number'}
             value={inputnumber.value}
             Placeholder="Enter number"
             type="number"
             sectext="false"
             errorText={inputnumber.message}
             onChangeText={text => {validatenumber(text) }}
         
             maxLength={10}
            />
          </View>

          <View style={{marginTop: 30}}>
            <Button
              label={'Get Otp'}
              onPress={() => navigation.navigate('OtpScreen')}
              maxLenth={10}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default Login;
