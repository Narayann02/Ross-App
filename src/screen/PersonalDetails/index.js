import React from "react";
import { View ,Image, TouchableOpacity,Text} from 'react-native';
import { StylesGloble } from "../../helper/GlobleCss";
import Header from "../../helper/Header";
import Imagepath from "../../constant/Imagepath";
import TextField from "../../helper/TextField";
import Location from '../../assest/svg/Location.svg';
import Button from "../../helper/Button";
import Girlblack from '../../assest/svg/Girlblack.svg';
import UploadArrow from '../../assest/svg/UploadArrow.svg';
import LocationGrey from '../../assest/svg/LocationGrey.svg';


const PersonalDetails = ({navigation})=>{

    return(
        <View style={{...StylesGloble.container,backgroundColor:'white'}}>


            <Header name={'Personal Details'} />
            <View style={{...StylesGloble.marginscreen}}>


                <View style={{alignSelf:'center',}}>

                    <Girlblack /> 
                      <View style={{top:"-50%",alignSelf:'center'}}>
                      <UploadArrow/>
                      </View>
                   
                

                  
                
                </View>

                <View style={{marginTop:0}}>
                    <TextField 
                    Placeholder='Arianna Deo'
                    name={'Name'}
                    />
                </View>
                <View style={{marginTop:15}}>
                    <TextField 
                    Placeholder='arianna@gmail.com'
                    name={'Email Address'}
                    />
                </View>

                <View style={{marginTop:15}}>
                    <TextField 
                    Placeholder='9999999999'
                    name={'Phone Number'}
                    />
                </View>



                <View style={{marginTop: 15}}>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#242A37'}}>
            Address
            </Text>
          </View>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#5D5D5D',
              height: 48,
              borderRadius: 8,
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 12,
              }}>
              <Text style={{fontSize: 16, fontWeight: '400', color: '#B0B0B0'}}>
              XYZ Main Street, City, State
              </Text>

              <View>
                <LocationGrey />
              </View>
            </View>
          </TouchableOpacity>


                <View style={{marginTop:'25%'}}>
                    <Button  label={'Save'}/>
                </View>




            </View>

        </View>

    )
}

export default PersonalDetails;
