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
  },

  {
    id: 3,
    name1: 'Visa Details',
    name2: 'Work Visa',
    name3: 'Residency Permit',
    name4: 'Other Documents',
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit..',
  },
];

const Home = ({navigation}) => {
  return (
    <View style={StylesGloble.container}>
      <FlatList 
      style={{marginBottom: 50}}
      data={[{name:'adgf'}]}
      showsVerticalScrollIndicator={false}
      renderItem={({item})=>
      <>
      
    
   
        <View style={StylesGloble.marginscreen}>
          <View style={{marginTop: 20}}>
            <Text style={StylesGloble.font20700000000}>My Appointment</Text>
          </View>

          <FlatList
            data={Servicesdata}
            keyExtractor={(item, index) => index}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity 
                style={{
                  borderWidth: 1,
                  borderColor: '#D1D1D1',
                  backgroundColor: '#FFFFFF',
                  height: 268,
                  borderRadius: 10,
                  paddingLeft: 15,
                  paddingRight: 15,
                  marginTop: 20,
                }}   onPress={()=>navigation.navigate('Residencyapplications')}>
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
              </TouchableOpacity>
            )}
          />
        </View>
  
        
      </>
      }
      />
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
