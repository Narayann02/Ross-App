import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {StylesGloble} from '../../helper/GlobleCss';
import Header from '../../helper/Header';
import DescripionBox from '../../assest/svg/DescripionBox.svg';
import Imagepath from '../../constant/Imagepath';
import Yourdetail from './Yourdetail';
import AdminUpdate from './AdminUpdate';

const filesdata = [
  {
    id: 1,
    image: Imagepath.Files,
    name: 'Residency Permit.pdf',
    mb: '2.5 MB',
    date: '09.05.2024',
    downimage: Imagepath.DownloadArrow,
  },
  {
    id: 2,
    image: Imagepath.Files,
    name: 'Residency Permit.pdf',
    mb: '2.5 MB',
    date: '09.05.2024',
    downimage: Imagepath.DownloadArrow,
  },
  {
    id: 3,
    image: Imagepath.Files,
    name: 'Residency Permit.pdf',
    mb: '2.5 MB',
    date: '09.05.2024',
    downimage: Imagepath.DownloadArrow,
  },

  {
    id: 4,
    image: Imagepath.Files,
    name: 'Residency Permit.pdf',
    mb: '2.5 MB',
    date: '09.05.2024',
    downimage: Imagepath.DownloadArrow,
  },
];

const Residencyapplications = ({navigation}) => {
  const [activetab, setactivetab] = useState(1);

  return (
    <View style={StylesGloble.container}>
      <View style={{backgroundColor: '#FFFFFF', height: '100%', width: '100%'}}>
        <Header name="Residency applications" />
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
            onPress={() => setactivetab(1)}
            style={{
              borderBottomWidth: 1.5,
              borderBottomColor: activetab == 1 ? '#9846D7' : '#ffffff',
              width: '43%',
              paddingBottom: 15,
            }}>
            <Text
              style={{
                ...StylesGloble.fon14700b000000,
                fontWeight: '600',
                color: activetab == 1 ? '#000000' : '#5D5D5D',
                textAlign: 'center',
              }}>
              Your Details
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setactivetab(2)}
            style={{
              borderBottomWidth: 1.5,
              borderBottomColor: activetab == 2 ? '#9846D7' : '#ffffff',
              width: '43%',
              paddingBottom: 15,
            }}>
            <Text
              style={{
                ...StylesGloble.fon14700b000000,
                fontWeight: '600',
                color: activetab == 2 ? '#000000' : '#5D5D5D',
                textAlign: 'center',
              }}>
              Admin Update
            </Text>
          </TouchableOpacity>
        </View>
        {activetab == 1 ? (
          <Yourdetail navigation={navigation} />
        ) : activetab == 2 ? (
          <AdminUpdate navigation={navigation} />
        ) : null}
      </View>
    </View>
  );
};

export default Residencyapplications;
