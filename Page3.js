//Cart-page3

import React from "react"; 
import { StyleSheet, View, Text, TouchableOpacity,Image, ScrollView } from "react-native";

const Page3 = ({ navigation }) => {
  return (
    <View style={styles.container}  >
      <View style= {{ flexDirection: 'row',
      color: 'white',
       textAlign: 'center',
        backgroundColor: 'teal', 
        padding: 10, paddingTop: 50}}>



      <TouchableOpacity
      style={{backgroundColor: '#abb8c3',
      width: "14%",
      borderRadius: 20,
      height: 45,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 10,
      }}
      onPress={() => navigation.navigate({ name: "Page1" })}
    >

      <Image  style={{
           
            height: 30,
            width: 30,

          }}
          source={{
            uri: 'https://thumbs.dreamstime.com/b/back-arrow-icon-isolated-glossy-orange-round-button-abstract-illustration-195285502.jpg',
          }}/>

    </TouchableOpacity>
    <TouchableOpacity
      style={{backgroundColor: '#abb8c3',
      width: "14%",
      borderRadius: 20,
      height: 45,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 180,
      }}
      onPress={() => navigation.navigate({ name: "Page3" })}
    >

      <Image  style={{
      
            height: 30,
            width: 30,

          }}
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/000/425/526/original/shopping-cart-icon-vector-illustration.jpg',
          }}/>

    </TouchableOpacity>
    <TouchableOpacity
      style={{backgroundColor: '#abb3c8',
      width: "14%",
      borderRadius: 20,
      height: 45,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 10,
      }}
      onPress={() => navigation.navigate({ name: "Page2" })}
    >

      <Image  style={{
            borderRadius: 20,
            height: 30,
            width: 30,

          }}
          source={{
            uri: 'https://st2.depositphotos.com/1688079/10951/i/450/depositphotos_109510312-stock-photo-profile-member-icon-orange-square.jpg',
          }}/>

    </TouchableOpacity>

   

    </View>
    <Text style={{textAlign:'center', 
    fontSize: 30, 
    color: 'black',
     marginTop: 10, 
     fontStyle:'italic',
     fontWeight: "bold",}}> Pretty Pages</Text>

<Text style={{textAlign:'center', 
    fontSize: 20, 
    color: 'coral',
     marginTop: 10, 
     fontWeight: "bold",}}> Shopping Cart</Text>
<TouchableOpacity>
<Image  style={{
            borderRadius: 45,
            height: 45,
            width: 45,
            marginLeft:300

          }}
          source={{
            uri: 'https://th.bing.com/th/id/OIP.2j2BQWLHTLaqRNZ21iX7vAAAAA?pid=ImgDet&rs=1',
          }}/>
      
      <Text style={{textAlign:'right', 
    fontSize: 15, 
    color: 'black',
     marginTop: 3, 
     marginRight:25,
     fontWeight: "bold",}}> Edit</Text>

</TouchableOpacity>


<TouchableOpacity>
<Image  style={{
            borderRadius: 45,
            height: 45,
            width: 45,
            marginLeft:300,
            marginTop:-150

          }}
          source={{
            uri: 'https://thumbs.dreamstime.com/b/settings-process-icon-shiny-bright-orange-round-button-illustration-isolated-156514136.jpg',
          }}/>
    
   
</TouchableOpacity>
  </View>

);
};


const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#abb8c3'

   
},
img:{

  marginLeft: 250,
  height: 100,
  width: 100,
  borderWidth: 5,
  borderRadius: 5
  

 

},
button: {
  margin: 15,
  width: "35%",
  borderRadius: 20,
  height: 45,
  alignItems: "center",
  justifyContent: "center",
  marginLeft: 120,
  backgroundColor: "black",
  marginTop: 20,
},
});
export default Page3;


