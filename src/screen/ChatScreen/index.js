import React, {useState} from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {StylesGloble} from '../../helper/GlobleCss';
import Imagepath from '../../constant/Imagepath';
import Iconlyarrow from '../../assest/svg/Iconlyarrow.svg';
import GirlIcon from '../../assest/svg/GirlIcon.svg';
import Link from '../../assest/svg/Link.svg';
import BlueGone from '../../assest/svg/BlueGone.svg';
import Tickdouble from '../../assest/svg/Tickdouble.svg';

const ChatScreen = ({navigation}) => {
  const [showskeleton, setshowskeleton] = useState(1);
  return (
    <View style={StylesGloble.container}>
      <ScrollView>
        <ImageBackground
          style={{height: 141, width: '100%'}}
          source={Imagepath.Banganiblock}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              marginLeft: 20,
            }}>
            <TouchableOpacity>
              <Iconlyarrow />
            </TouchableOpacity>

            <View style={{marginLeft: 15}}>
              <GirlIcon />
            </View>

            <View style={{marginLeft: 15}}>
              <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: '600'}}>
                Eliza beth
              </Text>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    height: 6,
                    width: 6,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 10,
                  }}
                />

                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 14,
                    fontWeight: '400',
                    left: 10,
                  }}>
                  Online
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>

        <View style={StylesGloble.marginscreen}>
          <View
            style={{
              backgroundColor: '#9846D7',
              height: 110,
              width: 237,
              marginTop: 20,
              borderBottomEndRadius: 10,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              borderTopLeftRadius: 10,
            }}>
            <View
              style={{
                marginLeft: 10,
                marginRight: 10,
                justifyContent: 'center',
                flex: 1,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  color: '#FFFFFF',
                  lineHeight: 18,
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </Text>
            </View>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={{fontSize: 10, fontWeight: '500', color: '#888888'}}>
              2:55 PM
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#F4EAFD',
              height: 56,
              width: 237,
              borderBottomLeftRadius: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              alignSelf: 'flex-end',
              marginTop: 25,
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#3D115A',
                lineHeight: 18,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 10,
              }}>
              sure I can Share Please wait till tomorrow.
            </Text>
          </View>
          <View
            style={{marginTop: 5, alignSelf: 'flex-end', flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '500',
                color: '#888888',
                right: 5,
              }}>
              3:02 PM
            </Text>
            <Tickdouble />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '85%',
            }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#D1D1D1',
                height: 50,
                borderRadius: 12,
                backgroundColor: '#FFFFFF',
                shadowColor: '#0000005',
                width: '80%',
              }}>
              <TextInput
                style={{left: 10, width: '85%'}}
                placeholder="Write your message here"
                placeholderTextColor={'#B0B0B0'}
              />

              <TouchableOpacity
                style={{alignItems: 'flex-end', top: -33, right: '4%'}}>
                <Link />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <BlueGone />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChatScreen;
