import React, { useState } from 'react';
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  Modal,
} from 'react-native';
import {StylesGloble} from '../../helper/GlobleCss';
import Imagepath from '../../constant/Imagepath';
import Search from '../../assest/svg/Search.svg';
import Security from '../../assest/svg/Security.svg';
import Locked from '../../assest/svg/Locked.svg';
import Helpcircle from '../../assest/svg/Helpcircle.svg';
import Logout from '../../assest/svg/Logout.svg';
import Profileicon from '../../assest/svg/Profileicon.svg';
import LinearGradient from 'react-native-linear-gradient';

const Profile = ({navigation}) => {
  const [showmodal,setshowmodal]=useState('');

  return (
    <View style={StylesGloble.container}>
      <ImageBackground
        style={{
          height: 168,
          width:'100%',
          alignSelf: 'center',
          borderBottomRightRadius: 30,
        }}
        source={Imagepath.Profiledetails}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            marginLeft: 20,
            marginRight: 20,
          }}>
          <Image
            style={{height: 62, width: 62}}
            source={Imagepath.AriannaDeo}
          />
          <View style={{marginLeft: 10}}>
            <Text style={{...StylesGloble.fon24700FFFFFF, fontSize: 16}}>
              Arianna Deo
            </Text>
            <Text style={{fontSize: 14, fontWeight: '400', color: '#FFFFFF'}}>
              ariannadeo@gmail.com
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={StylesGloble.marginscreen}>
        <TouchableOpacity onPress={()=>navigation.navigate('PersonalDetails')}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
          <Profileicon />
          <Text style={{...StylesGloble.font165005D5D5D, marginLeft: 10}}>
            Personal Details
          </Text>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#D1D1D1',
            marginTop: 15,
          }}
        />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Security')}>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <Security />
          <Text style={{...StylesGloble.font165005D5D5D, marginLeft: 10}}>
            Security
          </Text>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#D1D1D1',
            marginTop: 15,
          }}
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('PrivacyPolicy')}>

     

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <Locked />
          <Text style={{...StylesGloble.font165005D5D5D, marginLeft: 10}}>
            Privacy Policy
          </Text>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#D1D1D1',
            marginTop: 15,
          }}
        />
             </TouchableOpacity>

             <TouchableOpacity onPress={()=>navigation.navigate('HelpandSupport')}>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <Helpcircle />
          <Text style={{...StylesGloble.font165005D5D5D, marginLeft: 10}}>
            Help & Support
          </Text>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#D1D1D1',
            marginTop: 15,
          }}
        />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>setshowmodal(true)}>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <Logout />
          <Text style={{...StylesGloble.font165005D5D5D, marginLeft: 10,color:'#FF2D21'}}>
            Log out
          </Text>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#D1D1D1',
            marginTop: 15,
          }}
        />
        </TouchableOpacity>


        <View>
      <Modal transparent={true} visible={showmodal} onRequestClose={()=>setshowmodal(false)}>

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
            borderWidth: 1,
            borderColor: '#D1D1D1',
            backgroundColor: '#FFFFFF',
            borderRadius: 24,
            height: 306,
            width: 305,
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop:'60%'
          }}>
          <Image
            style={{height: 70, width: 70, alignSelf: 'center'}}
            source={Imagepath.LargeLogout}
          />
          <View style={{marginTop: 20}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                color: '#000000',
                textAlign: 'center',
              }}>
              Log out
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: '#5D5D5D',
                lineHeight: 19,
                textAlign: 'center',
              }}>
              Are you sure you want to logout?
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 30,
            }}>
            <TouchableOpacity onPress={()=>setshowmodal(false)}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#888888',
                  borderRadius: 8,
                  height: 39,
                  padding: 6,
                  width: 120,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#888888',
                    textAlign: 'center',
                  }}>
                  Cancel
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <LinearGradient
                colors={['#9846D7', '#C490F0']}
                style={{borderRadius: 8, height: 39, padding: 8, width: 120}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#FFFFFF',
                    textAlign: 'center',
                  }}>
                  Confirm
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          </View>
        </View>
      </Modal>
    </View>

      
      </View>

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

export default Profile;
