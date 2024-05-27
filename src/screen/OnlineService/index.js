import React, {useState} from 'react';
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
import PaperUpload from '../../assest/svg/PaperUpload.svg';
import Addcircle from '../../assest/svg/Addcircle.svg';
import CalenderPicker from '../../assest/svg/CalenderPicker.svg';
import Clockgrey from '../../assest/svg/Clockgrey.svg';
import DateTimePicker from '@react-native-community/datetimepicker';


const OnlineService = ({navigation}) => {
const [showTimePicker,setshowTimePicker] = useState(false);
const [time,setTime] = useState(new Date());
const [timer,settimer] = useState('');



const handleTimeChange = (event)=>{

 
  setshowTimePicker(false);
 
  
};

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [datee, setDatee] = useState('');

  const handleDateChange = (event, selectedDate) => {
    setDate(selectedDate);
    setDatee()

  

    setShowPicker(false);

  
  };
  return (
    <View style={StylesGloble.container}>
      <Header name={'Online Service'} />

      <ScrollView style={{marginBottom: '10%'}}>
        <View style={StylesGloble.marginscreen}>
          <View>
            <TextField name={'Title'} Placeholder="Residency applications" />
          </View>

          <View style={{marginTop: 15}}>
            <TextField name={'First Name'} Placeholder="Enter name" />
          </View>

          <View style={{marginTop: 15}}>
            <TextField name={'Last Name'} Placeholder="Enter name" />
          </View>

          <View style={{marginTop: 15}}>
            <TextField name={'Email Address'} Placeholder="Enter email" />
          </View>
          <View style={{marginTop: 15}}>
            <TextField name={'Phone Number'} Placeholder="Enter number" />
          </View>

          <View style={{marginTop: 15}}>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#242A37'}}>
              Date of Birth
            </Text>
          </View>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#5D5D5D',
              height: 48,
              borderRadius: 8,
              marginTop: 10,
            }}
            onPress={() => setShowPicker(true)}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 12,
              }}>
              <Text style={{fontSize: 16, fontWeight: '400', color: '#B0B0B0'}}>
                Select
              </Text>

              <View>
                <CalenderPicker />
              </View>
            </View>
          </TouchableOpacity>

          <View style={{marginTop: 15}}>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#242A37'}}>
              Time
            </Text>
          </View>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#5D5D5D',
              height: 48,
              borderRadius: 8,
              marginTop: 10,
            }} onPress={()=>setshowTimePicker(true)}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 12,
              }}>
              <Text style={{fontSize: 16, fontWeight: '400', color: '#B0B0B0'}}>
                Select
              </Text>

              <View>
                <Clockgrey />
              </View>
            </View>
          </TouchableOpacity>


          {showTimePicker && 
            <View>
              <DateTimePicker
                time = {time}

                value={time}
                mode="time"

                



                onChange={handleTimeChange}
                
              />
            </View>
          }


          

          <View style={{marginTop: 15}}>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#242A37'}}>
              Date
            </Text>
          </View>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#5D5D5D',
              height: 48,
              borderRadius: 8,
              marginTop: 10,
            }}
            onPress={() => setShowPicker(true)}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 12,
              }}>
              {datee ? 
                <Text
                  style={{fontSize: 16, fontWeight: '400', color: '#B0B0B0'}}>
                  {datee}
                </Text>
               : 
                <Text
                  style={{fontSize: 16, fontWeight: '400', color: '#B0B0B0'}}>
                  Select
                </Text>
              }

              <View>
                <CalenderPicker />
              </View>
            </View>
          </TouchableOpacity>

          {showPicker && 
            <View>
              <DateTimePicker
                date={date}
                value={date}
                mode="date"
                onChange={handleDateChange}
                maximumDate={new Date()}
                format={'YYYY-MM-DD'}
                displayFormat={'DD-MM-YYYY'}
              />
            </View>
          }

          {/* <DateTimePickerAndroid
                            date={date}
                            value={date}
                            mode="date"
                            onChange={handleDateChange}
                            maximumDate={new Date()}
                            format={"YYYY-MM-DD"}
                            displayFormat={"DD-MM-YYYY"}
                        /> */}
          {/* {
                        showPicker &&
                      
                        
                      <DateTimePicker 
                      
                      date={date}
                            value={date}
                            mode="date"
                            onChange={handleDateChange}
                            maximumDate={new Date()}
                            format={"YYYY-MM-DD"}
                            displayFormat={"DD-MM-YYYY"}
                      
                      
                      />
                      }
                         */}

          <View style={{marginTop: 15}}>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#242A37'}}>
              Description
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#5D5D5D',
              height: 150,
              borderRadius: 8,
              marginTop: 10,
            }}>
            <TextInput style={{marginLeft: 10}} placeholder="Ex." />
          </View>

          <View style={{marginTop: 15}}>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#242A37'}}>
              Upload Document
            </Text>
          </View>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#5D5D5D',
              height: 148,
              borderRadius: 8,
              marginTop: 10,
              borderStyle: 'dashed',
            }}>
            <View style={{alignSelf: 'center', marginTop: 15}}>
              <PaperUpload />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 15,
              }}>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#9846D7'}}>
                Choose
              </Text>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#6D6D6D'}}>
                {' '}
                file to upload
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: '#6D6D6D',
                textAlign: 'center',
                marginTop: 6,
              }}>
              Please select your document type & upload an image of your
              document below:
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: '#9846D7',
              padding: 5,
              width: 129,
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              height: 30,
            }}>
            <Addcircle />
            <Text style={{fontSize: 12, fontWeight: '500', color: '#9846D7'}}>
              Add Document
            </Text>
          </TouchableOpacity>

          <View style={{marginTop: 30}}>
            <Button label={'Submit Request'} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default OnlineService;
