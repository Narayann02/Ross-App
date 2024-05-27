import React,{useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image,Modal} from 'react-native';
import {StylesGloble} from '../../helper/GlobleCss';
import Header from '../../helper/Header';
import DescripionBox from '../../assest/svg/DescripionBox.svg';
import Imagepath from '../../constant/Imagepath';
import Featuredicon from '../../assest/svg/Featuredicon.svg';
import PaperUpload from '../../assest/svg/PaperUpload.svg';
import LinearGradient from 'react-native-linear-gradient';

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

const AdminUpdate = ({navigation}) => {
  const [filepopup,setfilepopup] = useState(false);
  return (
    <View style={StylesGloble.container} >
      
      <View style={StylesGloble.marginscreen}>
        <FlatList
          style={{marginBottom: '10%',}}
          data={[{name: 'gana'}]}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <>
            

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
                    <TouchableOpacity onPress={()=>setfilepopup(true)}
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
                        source={item.downimage}
                      />
                    </TouchableOpacity>
                  </>
                )}
              />
            </>
          )}
        />


        
      </View>
      
<Modal animationType="true" transparent={true} visible={filepopup} onRequestClose={()=>setfilepopup(false)}>
             
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
                   position: 'absolute',
                   bottom: 0,
                   left: 20,
                   right: 20,
                   // // height: '30%',
                   // backgroundColor: '#ffffff',
                   // padding: 20,
                   top: '35%',
                   // borderRadius: 24,
                   // borderWidth: 1,
                   // borderColor: '#D1D1D1',
                 }}>
               
                   <View
                     style={{
                       borderColor: '#D1D1D1',
                       borderWidth: 1,
                       height: 270,
                       backgroundColor: '#FFFFFF',
                       borderRadius: 24,
                      
                     }}>
                      <View style={{marginLeft:20,marginRight:20}}>

<Text style={{fontSize:14,fontWeight:'500',color:'#242A37',top:15}}>Upload Document</Text>
                     <TouchableOpacity
                       style={{ marginTop: 25}}
                    >
                     
                       
                    
                     <View style={{borderColor:'#B0B0B0',height:135,borderWidth:1,borderStyle:'dashed',borderRadius:12}}>
                       <View style={{alignSelf:'center',marginTop:20}}>
                       <PaperUpload  />
                       </View>

                       <View style={{marginTop:15}}>
                        <Text style={{fontSize:14,fontWeight:'600',color:'#9846D7',textAlign:'center',}}>Choose {""}<Text style={{color:'#6D6D6D',fontSize:14,fontWeight:'600',left:5}}>file to upload</Text></Text>
                <Text style={{color:'#6D6D6D',fontSize:10,fontWeight:'400',textAlign:'center',top:5}}>Please select your document type & upload an image of your document below:</Text>
                       </View>

                      
                     
                     </View>


       
                        </TouchableOpacity>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
<TouchableOpacity style={{height:39,borderColor:'#888888',borderWidth:1,borderRadius:8,padding:8,width:130}} onPress={()=>setfilepopup(false)}>
  <Text style={{fontSize:16,fontWeight:'600',color:'#888888',textAlign:'center'}}>Cancel</Text>
</TouchableOpacity>


<TouchableOpacity>
  <LinearGradient colors={['#9846D7','#C490F0']} style={{height:39,borderRadius:8,width:130,padding:8}}>
  <Text style={{fontSize:16,fontWeight:'600',color:'#FFFFFF',textAlign:'center'}}>Submit</Text>
  </LinearGradient>
</TouchableOpacity>

</View>




                        </View>
                   
                   </View>
                 </View>
               </View>
          
           </Modal>

    </View>
  );
};

export default AdminUpdate;
