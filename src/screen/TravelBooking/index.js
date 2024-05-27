import React, {memo, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {StylesGloble} from '../../helper/GlobleCss';
import Header from '../../helper/Header';
import TextField from '../../helper/TextField';
import Button from '../../helper/Button';
import CalenderPicker from '../../assest/svg/CalenderPicker.svg';
import DateTimePicker from '@react-native-community/datetimepicker';
import LocationGrey from '../../assest/svg/LocationGrey.svg';

const TravelBooking = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [datee, setDatee] = useState('');

  const handleDateChange = (event, selectedDate) => {
    setDate(selectedDate);
    setDatee();


        // setDate(selectedDate);
        // setDatee(formattedDate);
        // if (selectedDate) {
        //     const formattedDate = moment(selectedDate).format("YYYY-MM-DD")
        //     setDate(selectedDate);
        //     setDatee(formattedDate);

            setShowPicker(false);
    

  

  };

  const [btndisable, setbtndisable] = useState(false);
  const [inputemail, setInputemail] = useState({
    value: null,
    message: '',
    isValid: false,
  });

  const [inputfname, setInputfname] = useState({
    value: null,
    message: '',
    isValid: false,
  });

  const [inputlname, setInputlname] = useState({
    value: null,
    message: '',
    isValid: false,
  });

  const [inputnumber, setInputnumber] = useState({
    value: null,
    message: '',
    isValid: false,
  });

  const emailReg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValidEmail = email => {
    return emailReg.test(String(email).toLowerCase());
  };
  const validateemail = _in => {
    try {
      setInputemail(prev => ({...prev, value: _in}));
      if (!_in) {
        setInputemail(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter email',
        }));
      } else if (!isValidEmail(_in)) {
        setInputemail(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter a valid Email ',
        }));
      } else if (_in.length === 0) {
        setInputemail(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter email',
        }));
      } else {
        setInputemail(prev => ({...prev, isValid: false, message: ''}));
      }
    } catch (error) {}
    checkvalidation();
  };

  const validatefname = _in => {
    try {
      setInputfname(prev => ({...prev, value: _in}));
      if (!_in) {
        setInputfname(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter name',
        }));
      } else if (_in.length === 0) {
        setInputfname(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter name',
        }));
      } else {
        setInputfname(prev => ({...prev, isValid: false, message: ''}));
      }
    } catch (error) {}
    checkvalidation();
  };

  const validatelname = _in => {
    try {
      setInputlname(prev => ({...prev, value: _in}));
      if (!_in) {
        setInputlname(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter  your last name',
        }));
      } else if (_in.length === 0) {
        setInputlname(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter  your last name',
        }));
      } else {
        setInputlname(prev => ({...prev, isValid: false, message: ''}));
      }
    } catch (error) {}
    checkvalidation();
  };

  const isValidPhoneNumber = phone => {
    return /^\d{10}$/.test(phone);
  };
  const validatenumber = _in => {
    try {
      setInputnumber(prev => ({...prev, value: _in}));
      if (!_in) {
        setInputnumber(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter number',
        }));
      } else if (!isValidPhoneNumber(_in)) {
        setInputnumber(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter correct phone number',
        }));
      } else if (_in.length === 0) {
        setInputnumber(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter number',
        }));
      } else {
        setInputnumber(prev => ({...prev, isValid: false, message: ''}));
      }
    } catch (error) {}
    checkvalidation();
  };
  const checkvalidation = () => {
    if (
      inputfname.value != null &&
      inputemail.value != null &&
      inputnumber.value != null
    ) {
      setbtndisable(true);
    } else {
      setbtndisable(false);
    }
  };
  return (
    <View style={StylesGloble.container}>
      <Header name={'Travel Booking'} />

      <ScrollView style={{marginBottom: '10%'}}>
        <View style={StylesGloble.marginscreen}>
          <View>
            <Text style={{...StylesGloble.font16600black, fontWeight: '700'}}>
              Passenger Info
            </Text>
          </View>

          <View style={{marginTop: 20}}>
            <TextField
              name={'First Name'}
              Placeholder="Enter name"
              value={inputfname.value}
              type="text"
              sectext="false"
              errorText={inputfname.message}
              onChangeText={text => {
                validatefname(text);
              }}
            />
          </View>

          <View style={{marginTop: 15}}>
            <TextField
              name={'Last Name'}
              Placeholder="Enter name"
              value={inputlname.value}
              type="text"
              sectext="false"
              errorText={inputlname.message}
              onChangeText={text => {
                validatelname(text);
              }}
            />
          </View>

          <View style={{marginTop: 15}}>
            <TextField
              name={'Phone Number'}
              value={inputnumber.value}
              Placeholder="Enter number"
              type="number"
              sectext="false"
              errorText={inputnumber.message}
              onChangeText={text => {
                validatenumber(text);
              }}
              maxLength={10}
            />
          </View>

          <View style={{marginTop: 15}}>
            <TextField
              name={'Email Address'}
              Placeholder="Enter email"
              value={inputemail.value}
              type="email"
              sectext="false"
              errorText={inputemail.message}
              onChangeText={text => {
                validateemail(text);
              }}
            />
          </View>

          <View style={{marginTop: 15}}>
            <TextField
              name={'Total Number of Adults'}
              Placeholder="Enter number"
            />
          </View>

          <View style={{marginTop: 15}}>
            <TextField
              name={'Total Number of Children'}
              Placeholder="Enter number"
            />
          </View>

          <View style={{marginTop: 15}}>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#242A37'}}>
              Destination
            </Text>
          </View>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#5D5D5D',
              height: 48,
              borderRadius: 8,
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 12,
              }}>
              <Text style={{fontSize: 16, fontWeight: '400', color: '#B0B0B0'}}>
                Enter destination
              </Text>

              <View>
                <LocationGrey />
              </View>
            </View>
          </TouchableOpacity>

          <View style={{marginTop: 15}}>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#242A37'}}>
              Travel Date
            </Text>
          </View>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#5D5D5D',
              height: 48,
              borderRadius: 8,
              marginTop: 10,
            }} onPress={()=>setShowPicker(true)}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 12,
              }}>
{
    datee ? 

               <Text style={{fontSize: 16, fontWeight: '400', color: '#B0B0B0'}}>
                {datee}
              </Text>
              :
              <Text style={{fontSize: 16, fontWeight: '400', color: '#B0B0B0'}}>
                Select
              </Text>
}
              <View>
                <CalenderPicker />
              </View>
            </View>
          </TouchableOpacity>

          {showPicker && (
            <View>
              <DateTimePicker
                date={date}
                value={date}
                mode="date"
                onChange={handleDateChange}
                maximumDate={new Date()}
                                    format={"YYYY-MM-DD"}
                                    displayFormat={"DD-MM-YYYY"}
              />
            </View>
          )}

          <View style={{marginTop: 15}}>
            <TextField
              name={'Desired Trip Amount'}
              Placeholder="Enter Amount"
            />
          </View>

          <View style={{marginTop: 30}}>
            <Button label={'Submit Request'} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default TravelBooking;
