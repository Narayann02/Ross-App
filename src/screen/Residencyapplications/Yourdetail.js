import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {StylesGloble} from '../../helper/GlobleCss';
import Header from '../../helper/Header';
import DescripionBox from '../../assest/svg/DescripionBox.svg';
import Imagepath from '../../constant/Imagepath';
import Addblue from '../../assest/svg/Addblue.svg';

const filesdata = [
  {
    id: 1,
    image: Imagepath.Files,
    name: 'Residency Permit.pdf',
    mb: '2.5 MB',
    date: '09.05.2024',
    deletimage: Imagepath.Deletebox,
  },
  {
    id: 2,
    image: Imagepath.Files,
    name: 'Residency Permit.pdf',
    mb: '2.5 MB',
    date: '09.05.2024',
    deletimage: Imagepath.Deletebox,
  },
  {
    id: 3,
    image: Imagepath.Files,
    name: 'Residency Permit.pdf',
    mb: '2.5 MB',
    date: '09.05.2024',
    deletimage: Imagepath.Deletebox,
  },

  {
    id: 4,
    image: Imagepath.Files,
    name: 'Residency Permit.pdf',
    mb: '2.5 MB',
    date: '09.05.2024',
    deletimage: Imagepath.Deletebox,
  },
];

const Yourdetail = ({navigation}) => {
  return (
    <View style={StylesGloble.container}>
      <View style={StylesGloble.marginscreen}>
        <FlatList
          style={{marginBottom: '10%'}}
          data={[{name: 'gana'}]}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#D1D1D1',
                  borderRadius: 10,
                  height: 295,
                  backgroundColor: '#FFFFFF',
                  marginTop: 25,
                }}>
                <View style={{marginLeft: 10, marginRight: 10}}>
                  <Text
                    style={{
                      ...StylesGloble.font16600black,
                      fontWeight: '700',
                      top: 10,
                    }}>
                    Details
                  </Text>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: '#D1D1D1',
                      marginTop: 20,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <Text style={StylesGloble.font14500g6D6D6D}>Title</Text>
                    <Text
                      style={{
                        ...StylesGloble.fon14700b000000,
                        fontWeight: '600',
                      }}>
                      Residency applications
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <Text style={StylesGloble.font14500g6D6D6D}>Name</Text>
                    <Text
                      style={{
                        ...StylesGloble.fon14700b000000,
                        fontWeight: '600',
                      }}>
                      Arianna Deo
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <Text style={StylesGloble.font14500g6D6D6D}>Email</Text>
                    <Text
                      style={{
                        ...StylesGloble.fon14700b000000,
                        fontWeight: '600',
                      }}>
                      arianna@gmail.com
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <Text style={StylesGloble.font14500g6D6D6D}>Phone</Text>
                    <Text
                      style={{
                        ...StylesGloble.fon14700b000000,
                        fontWeight: '600',
                      }}>
                      9999999999
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <Text style={StylesGloble.font14500g6D6D6D}>
                      Date of Birth
                    </Text>
                    <Text
                      style={{
                        ...StylesGloble.fon14700b000000,
                        fontWeight: '600',
                      }}>
                      08.03.2024
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <Text style={StylesGloble.font14500g6D6D6D}>
                      Date of Birth
                    </Text>
                    <Text
                      style={{
                        ...StylesGloble.fon14700b000000,
                        fontWeight: '600',
                      }}>
                      08.03.2024
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <Text style={StylesGloble.font14500g6D6D6D}>Time</Text>
                    <Text
                      style={{
                        ...StylesGloble.fon14700b000000,
                        fontWeight: '600',
                      }}>
                      08:00 AM
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <Text style={StylesGloble.font14500g6D6D6D}>Date</Text>
                    <Text
                      style={{
                        ...StylesGloble.fon14700b000000,
                        fontWeight: '600',
                      }}>
                      05.05.2024
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#D1D1D1',
                  borderRadius: 10,
                  height: 160,
                  backgroundColor: '#FFFFFF',
                  marginTop: 25,
                }}>
                <View style={{marginLeft: 10, marginRight: 10}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      top: 10,
                    }}>
                    <View>
                      <Text
                        style={{
                          ...StylesGloble.font16600black,
                          fontWeight: '700',
                        }}>
                        Description
                      </Text>
                    </View>
                    <TouchableOpacity>
                      <DescripionBox />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: '#D1D1D1',
                      marginTop: 20,
                    }}
                  />
                  <Text
                    style={{
                      ...StylesGloble.font14500g6D6D6D,
                      top: 15,
                      lineHeight: 19,
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </Text>
                </View>
              </View>

              <View style={{marginTop: 20}}>
                <Text style={StylesGloble.font20700000000}>
                  Uploaded 4 files
                </Text>
              </View>
             

              <FlatList
                style={{marginTop: 0}}
                data={filesdata}
                keyExtractor={(item, index) => index}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                  <>
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 20,
                      }}>
                      <Image
                        style={{height: 58, width: 58}}
                        source={item.image}
                      />

                      <View style={{marginRight: '20%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item.name}
                        </Text>

                        <Text
                          style={{
                            fontSize: 10,
                            fontWeight: '500',
                            color: '#6D6D6D',
                          }}>
                          {item.mb}
                        </Text>

                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '600',
                            color: '#6D6D6D',
                          }}>
                          {item.date}
                        </Text>
                      </View>
                      <Image
                        style={{height: 30, width: 30}}
                        source={item.deletimage}
                      />
                    </TouchableOpacity>
                  </>
                )}
              />



<TouchableOpacity style={{borderColor:'#9846D7',borderWidth:1,borderRadius:5,flexDirection:'row',alignItems:'center',width:129,justifyContent:'space-evenly',height:30,marginTop:30}}>
              <Addblue />
        <Text style={{fontSize:12,fontWeight:'500',color:'#9846D7'}}>Add Document</Text>

      </TouchableOpacity>
            </>



          )}
        />


        
      </View>
     
    </View>
  );
};

export default Yourdetail;
