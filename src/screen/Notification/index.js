import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {StylesGloble} from '../../helper/GlobleCss';
import Imagepath from '../../constant/Imagepath';

const discountdata = [
  {
    id: 1,
    image: Imagepath.AriannaDeo,
    name: 'New User Discount',
    time: '19 m ago',
    heading:
      'Special for new user You will get 40% off discount in every places.',
  },
  {
    id: 1,
    image: Imagepath.AriannaDeo,
    name: 'New User Discount',
    time: '19 m ago',
    heading:
      'Special for new user You will get 40% off discount in every places.',
  },
  {
    id: 1,
    image: Imagepath.AriannaDeo,
    name: 'New User Discount',
    time: '19 m ago',
    heading:
      'Special for new user You will get 40% off discount in every places.',
  },
  {
    id: 1,
    image: Imagepath.AriannaDeo,
    name: 'New User Discount',
    time: '19 m ago',
    heading:
      'Special for new user You will get 40% off discount in every places.',
  },
  {
    id: 1,
    image: Imagepath.AriannaDeo,
    name: 'New User Discount',
    time: '19 m ago',
    heading:
      'Special for new user You will get 40% off discount in every places.',
  },
];

const Notification = () => {
  return (
    <View style={StylesGloble.container}>
      <View style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
        <View style={StylesGloble.marginscreen}>
          <View style={{marginTop: 20}}>
            <Text style={StylesGloble.font20700000000}>Notification</Text>
          </View>

          <FlatList
            data={discountdata}
            keyExtractor={(item, index) => index}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                  }}>
                  <Image style={{height: 62, width: 62}} source={item.image} />

                  <View style={{marginLeft: 10, width: 248}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={StylesGloble.fon14700b000000}>
                        {item.name}
                      </Text>
                      <Text style={StylesGloble.font10500grey}>
                        {item.time}
                      </Text>
                    </View>
                    <Text style={StylesGloble.font12400Grey5D5D5D}>
                      {item.heading}
                    </Text>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#EFEFEF',
                    paddingTop: 20,
                  }}
                />
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};
export default Notification;
