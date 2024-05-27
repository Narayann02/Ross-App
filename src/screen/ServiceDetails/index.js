import React, {useState} from 'react';
import {
  ImageBackground,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
  ScrollView,
  Modal,
} from 'react-native';
import {StylesGloble} from '../../helper/GlobleCss';

import Imagepath from '../../constant/Imagepath';

import Message from '../../assest/svg/Message.svg';

import BackWhite from '../../assest/svg/BackWhite.svg';
import Calendar from '../../assest/svg/Calendar.svg';
import Clock from '../../assest/svg/Clock.svg';
import Slot from '../../assest/svg/Slot.svg';
import TextField from '../../helper/TextField';
import PaperUpload from '../../assest/svg/PaperUpload.svg';
import Addcircle from '../../assest/svg/Addcircle.svg';
import Featuredicon from '../../assest/svg/Featuredicon.svg';
import Button from '../../helper/Button';
import CalenderPicker from '../../assest/svg/CalenderPicker.svg';
import DateTimePicker from '@react-native-community/datetimepicker';

const Requireddata = [
  {
    id: 1,
    name: 'Visa Details',
  },
  {
    id: 2,
    name: 'Work Visa',
  },
  {
    id: 3,
    name: 'Residency Permit',
  },
  {
    id: 4,
    name: 'Other Documents',
  },
];

const Descriptiondata = [
  {
    id: 1,
    heading:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    id: 2,
    heading:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
];

const ServiceDetails = ({navigation}) => {
  const [showmodall, setshowmodall] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [datee, setDatee] = useState('');

  const handleDateChange = (event, selectedDate) => {
    // setDate(selectedDate);
    // setDatee();

    setShowPicker(false);
  };

  return (
    <View style={StylesGloble.container}>
      <FlatList
        style={{marginBottom: '6%'}}
        data={[{name: 'abcd'}]}
        renderItem={({item}) => (
          <>
            <View>
              <ImageBackground
                imageStyle={{
                  borderBottomRightRadius: 25,
                  borderBottomLeftRadius: 25,
                  alignSelf: 'center',
                }}
                style={{height: 225, width: '100%'}}
                source={Imagepath.SeviceGroup}>
                <View style={StylesGloble.marginscreen}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 30,
                    }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                      <BackWhite />
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => navigation.navigate('ChatScreen')}>
                      <Message />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                    }}>
                    <Image
                      style={{height: 62, width: 62}}
                      source={Imagepath.UserPermit}
                    />

                    <View style={{marginLeft: 15}}>
                      <Text
                        style={{
                          ...StylesGloble.font20700000000,
                          color: '#FFFFFF',
                        }}>
                        Work permit Application
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: '600',
                          color: '#FFFFFF',
                        }}>
                        Select Your Date & Time
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 15,
                    }}>
                    <TouchableOpacity>
                      <View
                        style={{
                          backgroundColor: '#FFFFFF12',
                          borderRadius: 4,
                          padding: 5,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-evenly',
                          width: 107,
                        }}>
                        <Calendar />
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '600',
                            color: '#FFFFFF',
                          }}>
                          08.03.2024
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View
                        style={{
                          backgroundColor: '#FFFFFF12',
                          borderRadius: 4,
                          padding: 5,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-evenly',
                          width: 96,
                        }}>
                        <Clock />
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '600',
                            color: '#FFFFFF',
                          }}>
                          08:00 AM
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View
                        style={{
                          backgroundColor: '#FFFFFF12',
                          borderRadius: 4,
                          padding: 5,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-evenly',
                        }}>
                        <Slot />
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '600',
                            color: '#FFFFFF',
                          }}>
                          100
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </ImageBackground>
            </View>

            <View style={StylesGloble.marginscreen}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#D1D1D1',
                  borderRadius: 10,
                  height: 188,
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '700',
                    color: '#000000',
                    marginLeft: 10,
                    marginTop: 10,
                  }}>
                  Documents Required
                </Text>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#D1D1D1',
                    marginTop: 12,
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                />

                <FlatList
                  data={Requireddata}
                  keyExtractor={(item, index) => index}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => (
                    <View style={{paddingLeft: 20}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: 10,
                        }}>
                        <View
                          style={{
                            backgroundColor: '#6D6D6D',
                            height: 5,
                            width: 5,
                            borderRadius: 5,
                          }}
                        />
                        <Text style={{...styles.namestyl, marginLeft: 10}}>
                          {item.name}
                        </Text>
                      </View>
                    </View>
                  )}
                />
              </View>
            </View>

            <View style={StylesGloble.marginscreen}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#D1D1D1',
                  borderRadius: 10,
                  height: 240,
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '700',
                    color: '#000000',
                    marginLeft: 10,
                    marginTop: 10,
                  }}>
                  Description
                </Text>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#D1D1D1',
                    marginTop: 12,
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                />

                <FlatList
                  data={Descriptiondata}
                  keyExtractor={(item, index) => index}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => (
                    <View style={{paddingLeft: 20}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginTop: 15,
                        }}>
                        <View
                          style={{
                            backgroundColor: '#6D6D6D',
                            height: 5,
                            width: 5,
                            borderRadius: 5,
                            top: 8,
                          }}
                        />
                        <Text
                          style={{
                            ...styles.namestyl,
                            marginLeft: 10,
                            marginRight: 10,
                          }}>
                          {item.heading}
                        </Text>
                      </View>
                    </View>
                  )}
                />
              </View>
            </View>

            <View style={StylesGloble.marginscreen}>
              <View style={{marginTop: 15}}>
                <Text style={StylesGloble.font20700000000}>
                  Personal Details
                </Text>
              </View>

              <View style={{marginTop: 15}}>
                <TextField name={'First Name'} Placeholder={'Arianna'} />
              </View>

              <View style={{marginTop: 15}}>
                <TextField name={'Last Name'} Placeholder={'Deo'} />
              </View>

              <View style={{marginTop: 15}}>
                <TextField
                  name={'Email Address'}
                  Placeholder={'arianna@gmail.com'}
                />
              </View>

              <View style={{marginTop: 15}}>
                <TextField name={'Phone Number'} Placeholder={'9999999999'} />
              </View>

              <View style={{marginTop: 15}}>
                <Text
                  style={{fontSize: 14, fontWeight: '500', color: '#242A37'}}>
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
                  {datee ? (
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#B0B0B0',
                      }}>
                      {datee}
                    </Text>
                  ) : (
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#B0B0B0',
                      }}>
                      Select
                    </Text>
                  )}
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
                    format={'YYYY-MM-DD'}
                    displayFormat={'DD-MM-YYYY'}
                  />
                </View>
              )}

              <View style={{marginTop: 15}}>
                <Text
                  style={{fontSize: 14, fontWeight: '500', color: '#242A37'}}>
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
                <Text
                  style={{fontSize: 14, fontWeight: '500', color: '#242A37'}}>
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
                  <Text
                    style={{fontSize: 16, fontWeight: '600', color: '#9846D7'}}>
                    Choose
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '600',
                      color: '#6D6D6D',
                      left: 5,
                    }}>
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
                    marginLeft: 10,
                    marginRight: 10,
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
                <Text
                  style={{fontSize: 12, fontWeight: '500', color: '#9846D7'}}>
                  Add Document
                </Text>
              </TouchableOpacity>

              <View style={{marginTop: 30}}>
                <Button
                  label={'Book Appointment'}
                  onPress={() => setshowmodall(true)}
                />
              </View>
            </View>
          </>
        )}
      />

      <Modal
        animationType="true"
        transparent={true}
        visible={showmodall}
        onRequestClose={() => setshowmodall(false)}>
        <View
          style={{
            height: '100%',
            marginTop: 'auto',
            position: 'relative',
            backgroundColor: '#D1D1D199',
            zIndex: 999999,
          }}>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 20,
              right: 20,
              // // height: '30%',
              // backgroundColor: '#ffffff',
              // padding: 20,
              top: '35%',
              // borderRadius: 24,
              // borderWidth: 1,
              // borderColor: '#D1D1D1',
            }}>
            <View
              style={{
                borderColor: '#D1D1D1',
                borderWidth: 1,
                height: 275,
                backgroundColor: '#FFFFFF',
                borderRadius: 24,
              }}>
              <TouchableOpacity style={{alignSelf: 'center', marginTop: 25}}>
                <Featuredicon />
              </TouchableOpacity>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 20,
                  marginLeft: 20,
                  marginRight: 20,
                }}>
                <Text
                  style={{
                    ...StylesGloble.font20700000000,
                    fontWeight: '600',
                  }}>
                  Booking Successful
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '500',
                    color: '#5D5D5D',
                    lineHeight: 19,
                    textAlign: 'center',
                    top: 10,
                  }}>
                  Your appointment request has been successfully submitted.
                  We'll contact you soon.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  textper: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
  },
  namestyl: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6D6D6D',
  },
  textheadig: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6D6D6D',
    lineHeight: 19,
  },
});

export default ServiceDetails;
