import React, {useState} from 'react';
import {StyleSheet, Text, View, Modal, Pressable} from 'react-native';
import { CountryPicker, CountryButton } from "react-native-country-codes-picker";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function ListHeaderComponent({ countries, lang, onPress }) {
    return (
      <View
        style={{
          paddingBottom: 20,
        }}
      >
        <Text>
          Popular countries
        </Text>
        {countries?.map((country, index) => {
                return (
                    <CountryButton key={index} item={country} name={country?.name?.[lang || 'en']} onPress={() => onPress(country)} />
                )
            })}
      </View>
    )
  }

const Touchable = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  const [modalVisible, setModalVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');

  return (
    // <View style={styles.container}>
    //   <View style={styles.countContainer}>
    //     <Text>Count: {count}</Text>
    //   </View>
    //   <TouchableOpacity style={styles.button} onPress={onPress}>
    //     <Text>Press Here</Text>
    //   </TouchableOpacity>
    // </View>

<View style={styles.centeredView}>
<Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => {
    Alert.alert('Modal has been closed.');
    setModalVisible(!modalVisible);
  }}>
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
    
    <CountryPicker
          show={modalVisible}
          // when picker button press you will get the country object with dial code
          pickerButtonOnPress={(item) => {
            setCountryCode(item.dial_code);
            setModalVisible(!modalVisible);
          }}
          
          ListHeaderComponent={ListHeaderComponent}
          popularCountries={['en', 'ua', 'pl']}
        />
      <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.textStyle}>Hide Modal</Text>
      </Pressable>
    </View>
  </View>
</Modal>
<Pressable
  style={[styles.button, styles.buttonOpen]}
  onPress={() => setModalVisible(true)}>
  <Text style={styles.textStyle}>+91</Text>
</Pressable>
</View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 10,
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 10,
//   },
//   countContainer: {
//     alignItems: 'center',
//     padding: 10,
//   },
// });

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      boxShadowColor: '#000',
      boxShadowOffset: {
        width: 0,
        height: 2,
      },
      boxShadowOpacity: 0.25,
      boxShadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });

export default Touchable;