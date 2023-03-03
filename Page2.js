//ProfilePage-page2

import React from "react"; 
import { StyleSheet, View, Text, TouchableOpacity,Image, ScrollView } from "react-native";


const handleEditPress = () => {

}
const Page2 = ({ navigation }) => {

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
      style={{backgroundColor: '#abb8c3',
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
     fontStyle: 'italic',
       fontWeight: "bold",}}>   Pretty Pages</Text>



    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.coverPhoto}
          source={{uri: 'https://66.media.tumblr.com/1c8772dab77b33ff3bdd8b4defecb25a/tumblr_p3qvym7Yo41tqsa73o1_1280.jpg'}}
        />
        <View style={styles.profileContainer}>
          <Image
            style={styles.profilePhoto}
            source={{uri:'https://i.pinimg.com/originals/26/4f/ae/264fae4f8ce99bc47050b5c47ac77f9b.jpg'}}
          />
          <Text style={styles.nameText}>Abegail C. Almasco</Text>
        </View>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>
          Shop Everywhere

        </Text>

      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statContainer}>
          <Text style={styles.statCount}>9876</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statCount}>1654</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statCount}>17</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleEditPress}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  
    
  
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
headerContainer: {
  alignItems: 'center',
},
coverPhoto: {
  width: '100%',
  height: 200,
},
profileContainer: {
  alignItems: 'center',
  marginTop: -50,
},
profilePhoto: {
  width: 150,
  height: 150,
  borderRadius: 50,
},
nameText: {
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 10,
},
bioContainer: {
  padding: 20,
  marginLeft:110,
  marginTop:-20,

},
bioText: {
  fontSize: 15,
  fontStyle:'italic',
},
statsContainer: {
  flexDirection: 'row',
  marginTop: 20,
  marginBottom: 20,
},
statContainer: {
  alignItems: 'center',
  flex: 1,
},
statCount: {
  fontSize: 20,
  fontWeight: 'bold',
},
statLabel: {
  fontSize: 16,
  color: 'black',
},
button: {
  backgroundColor: 'teal',
  borderRadius: 20,
  padding: 10,
  marginHorizontal: 20,
},
buttonText: {
  fontSize: 16,
  color: 'white',
  textAlign: 'center',
},
});
export default Page2;
