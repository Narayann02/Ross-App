import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import {StylesGloble} from '../../helper/GlobleCss';
import Imagepath from '../../constant/Imagepath';
import Search from '../../assest/svg/Search.svg';
import Message from '../../assest/svg/Message.svg';

const Servicesdata = [
  {
    id: 1,
    name1: 'Visa Details',
    name2: 'Work Visa',
    name3: 'Residency Permit',
    name4: 'Other Documents',
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit..',
    pri: 'Price - ',
    price: '$5,000',
  },

  {
    id: 2,
    name1: 'Visa Details',
    name2: 'Work Visa',
    name3: 'Residency Permit',
    name4: 'Other Documents',
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit..',
    pri: 'Price - ',
    price: '$5,000',
  },
];

const Home = ({navigation}) => {
  return (
    <View style={StylesGloble.container}>
      <ImageBackground
        imageStyle={{
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          alignSelf: 'center',
        }}
        style={{height: 180, width: '100%'}}
        source={Imagepath.SeviceGroup}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginLeft: 20,
            marginRight: 20,
            flex: 1,
          }}>
          <View>
            <Text style={StylesGloble.fon24700FFFFFF}>Let’s find your</Text>
            <Text style={StylesGloble.fon24700FFFFFF}>best Services</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
            <Message />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={StylesGloble.marginscreen}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderWidth: 1,
            borderColor: '#E7E7E7',
            borderRadius: 8,
            height: 46,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
            marginTop: -23,
          }}>
          <Search />

          <TextInput
            style={{
              paddingLeft: 10,
              width: '90%',
              fontSize: 12,
              fontWeight: '400',
            }}
            placeholder="Search anything...."
            placeholderTextColor={'#6D6D6D'}
          />
        </View>

        <FlatList
          style={{marginBottom: '75%'}}
          data={[{name: 'abcd'}]}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <>
              <View style={{marginTop: 20}}>
                <Text style={StylesGloble.font20700000000}>Services</Text>
              </View>

              <FlatList
                data={Servicesdata}
                keyExtractor={(item, index) => index}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ServiceDetails')}>
                    <View
                      style={{
                        borderWidth: 1,
                        borderColor: '#D1D1D1',
                        backgroundColor: '#FFFFFF',
                        height: 295,
                        borderRadius: 10,
                        paddingLeft: 15,
                        paddingRight: 15,
                        marginTop: 20,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: 15,
                        }}>
                        <Image
                          style={{height: 45, width: 45}}
                          source={Imagepath.Workpermit}
                        />
                        <View style={{marginLeft: 10}}>
                          <Text style={StylesGloble.font16600black}>
                            Work permit Application
                          </Text>
                          <Text style={styles.textper}>Work permit</Text>
                        </View>
                      </View>

                      <View
                        style={{
                          borderBottomWidth: 1,
                          borderBottomColor: '#D1D1D1',
                          marginTop: 12,
                        }}
                      />
                      <View style={{paddingLeft: 10}}>
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
                            {item.name1}
                          </Text>
                        </View>
                      </View>

                      <View style={{paddingLeft: 10}}>
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
                            {item.name2}
                          </Text>
                        </View>
                      </View>

                      <View style={{paddingLeft: 10}}>
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
                            {item.name3}
                          </Text>
                        </View>
                      </View>

                      <View style={{paddingLeft: 10}}>
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
                            {item.name4}
                          </Text>
                        </View>
                      </View>

                      <View
                        style={{
                          borderBottomWidth: 1,
                          borderBottomColor: '#D1D1D1',
                          marginTop: 10,
                        }}
                      />

                      <Text style={{...styles.textheadig, marginTop: 10}}>
                        {item.heading}
                      </Text>

                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: '700',
                            color: '#5D5D5D',
                          }}>
                          {item.pri}
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: '700',
                            color: '#9846D7',
                          }}>
                          {item.price}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </>
          )}
        />
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

export default Home;
