import React,{useState} from "react";
import { View,Text, ScrollView, TouchableOpacity } from 'react-native';
import { StylesGloble } from "../../helper/GlobleCss";
import TextField from "../../helper/TextField";
import Button from "../../helper/Button";
import LocationGrey from '../../assest/svg/LocationGrey.svg';






const SignupScreen = ({navigation})=>{
    const [btndisable, setbtndisable] = useState(false);
    const [inputemail, setInputemail] = useState({
        value: null,
        message: '',
        isValid: false,
    });


    const [inputfname, setInputfname] = useState({
        value: null,
        message: '',
        isValid: false,
    });
    const [inputnumber, setInputnumber] = useState({
        value: null,
        message: '',
        isValid: false,
    });


    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidEmail = (email) => {
        return emailReg.test(String(email).toLowerCase());
    }
    const validateemail = _in => {
        try {
            setInputemail(prev => ({ ...prev, value: _in }));
            if (!_in) {
                setInputemail(prev => ({ ...prev, isValid: true, message: "Please enter email" }));
            }else if (!isValidEmail(_in)) {
                setInputemail(prev => ({ ...prev, isValid: true, message: "Please enter a valid Email " }));
            }
            else if (_in.length === 0) {
                setInputemail(prev => ({ ...prev, isValid: true, message: "Please enter email" }));
            }
            else {
                setInputemail(prev => ({ ...prev, isValid: false, message: '' }));
            }
        } catch (error) {
        }
        checkvalidation()
    };

 
    const validatefname = _in => {
        try {
            setInputfname(prev => ({ ...prev, value: _in }));
            if (!_in) {
                setInputfname(prev => ({ ...prev, isValid: true, message: "Please enter name" }));
            }
            else if (_in.length === 0) {
                setInputfname(prev => ({ ...prev, isValid: true, message: "Please enter name" }));
            }
            else {
                setInputfname(prev => ({ ...prev, isValid: false, message: '' }));
            }
        } catch (error) {
        }
        checkvalidation()
    };
    const isValidPhoneNumber = (phone) => {
        return /^\d{10}$/.test(phone);
    }
    const validatenumber = _in => {
        try {
            setInputnumber(prev => ({ ...prev, value: _in }));
            if (!_in) {
                setInputnumber(prev => ({ ...prev, isValid: true, message: "Please enter number" }));
            }else if (!isValidPhoneNumber(_in)) {
                setInputnumber(prev => ({ ...prev, isValid: true, message: "Please enter correct phone number" }));
            }
            else if (_in.length === 0) {
                setInputnumber(prev => ({ ...prev, isValid: true, message: "Please enter number" }));
            }
            else {
                setInputnumber(prev => ({ ...prev, isValid: false, message: '' }));
            }
        } catch (error) {
        }
        checkvalidation()
    };
    const checkvalidation = () => {
        if (inputfname.value != null && inputemail.value != null  && inputnumber.value != null) {
            setbtndisable(true);
        } else {
            setbtndisable(false);
        }
    }


    return(
        <ScrollView>
        <View style={StylesGloble.container}>
        <View style={StylesGloble.marginscreen}>
           <View style={{marginTop:20}}>
            <Text style={StylesGloble.font248009846D7}>Sign up</Text>
            <Text style={{...StylesGloble.font14500g6D6D6D,textAlign:'center',marginTop:10}}>Kindly input the required details to complete the registration process.</Text>
           </View>

   

            <View style={{marginTop:30}}>
            <TextField 
            name={'Name'}
            value={inputfname.value}
            Placeholder="Enter name"
            type="text"
            sectext="false"
            errorText={inputfname.message}
            onChangeText={text => {
                validatefname(text);
            }}
            />
            </View>


            <View style={{marginTop:20}}>
            <TextField 
            name={'Email Address'}
            value={inputemail.value}
            Placeholder="Enter number"
            type="email"
            sectext="false"
            errorText={inputemail.message}
            onChangeText={text =>{validateemail(text)}}
            />
            </View>

            <View style={{marginTop:20}}>
            <TextField 
            name={'Phone Number'}
            value={inputnumber.value}
            Placeholder="Enter number"
            type="number"
            sectext="false"
            errorText={inputnumber.message}
            onChangeText={text => {validatenumber(text) }}
            maxLength={10}
            />
            </View>

            

            
            <View style={{marginTop:20}}>

<Text style={{fontSize:14,fontWeight:'500',color:'#242A37'}}>Address</Text>
</View>

                <TouchableOpacity style={{borderWidth : 1 ,borderColor : "#5D5D5D" , height :48 , borderRadius : 8, marginTop:10,flexDirection:'row',justifyContent:'space-between',padding:12}}>
                <Text style={{fontSize:16,fontWeight:'400',color:'#5D5D5D'}}>XYZ Main Street, City, State</Text>
                  <LocationGrey />
                </TouchableOpacity>
        
                {/* <AddressTextField 
                name={'XYZ Main Street, City, State'}
                Placeholder="XYZ Main Street, City, State"
                />s
                </View> */}
    


        <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
            <Text style={StylesGloble.font12500Black000000}>By continuing, you agree to our</Text>
            <Text style={{...StylesGloble.font12500Black000000,color:'#9846D7',left:5,textDecorationLine:'underline'}}>Terms of Service</Text>
        </View>

        <View style={{marginTop:"10%"}}>
            <Button label={'Continue'}onPress={()=>navigation.navigate('BottomTab')}/>
        </View>


           </View>

          

        </View>
        </ScrollView>

    )
}

export default SignupScreen;