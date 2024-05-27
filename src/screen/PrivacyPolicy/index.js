import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../helper/Header';
import {StylesGloble} from '../../helper/GlobleCss';

const PrivacyPolicy = () => {
  return (
    <View>
      <Header name={'Privacy Policy'} />

      <View style={StylesGloble.marginscreen}>
        <View>
          <Text
            style={{
              ...StylesGloble.font14400grey5D5D5D,
              lineHeight: 20,
              textAlign: 'justify',
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Suspendisse faucibus interdum posuere lorem. Sit amet justo donec
            enim diam vulputate. Iaculis at erat pellentesque adipiscing.
          </Text>
        </View>

        <View style={{marginTop:15}}>
          <Text
            style={{
              ...StylesGloble.font14400grey5D5D5D,
              lineHeight: 20,
              textAlign: 'justify',
            }}>
            Feugiat vivamus at augue eget arcu dictum. Consectetur purus ut
            faucibus pulvinar elementum integer enim neque volutpat. Nunc non
            blandit massa enim nec dui nunc mattis. A condimentum vitae sapien
            pellentesque habitant. Ipsum dolor sit amet consectetur adipiscing
            elit.
          </Text>
        </View>


        <View style={{marginTop:15}}>
          <Text
            style={{
              ...StylesGloble.font14400grey5D5D5D,
              lineHeight: 20,
              textAlign: 'justify',
            }}>
            At auctor urna nunc id cursus metus aliquam eleifend. Bibendum neque
            egestas congue quisque egestas diam in. Volutpat est velit egestas
            dui id. Malesuada fames ac turpis egestas. Augue eget arcu dictum
            varius duis at consectetur lorem donec.
          </Text>
        </View>


        <View style={{marginTop:15}}>
          <Text
            style={{
              ...StylesGloble.font14400grey5D5D5D,
              lineHeight: 20,
              textAlign: 'justify',
            }}>
            Aenean sed adipiscing diam donec. Diam sollicitudin tempor id eu
            nisl nunc mi ipsum faucibus. Purus sit amet volutpat consequat
            mauris. Adipiscing elit ut aliquam purus sit amet luctus. Augue ut
            lectus arcu bibendum.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PrivacyPolicy;
