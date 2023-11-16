// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';

import { CountryPicker, CountryButton } from "react-native-country-codes-picker";
// import {CountryList} from "react-native-country-codes-picker";
const image = require('../assets/logoKApp.png');

export default function StartPage({navigation}) {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');


  const handleChange = (event) => {
    setCountryCode(event.target.value);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.loginHeader}>welcome to kadalaiapp</Text>
      <View style={styles.logoImg}>
        <Image source={image} style={{ width: 100, height: 100 }} />
      </View>

      <View >
        <Text style={styles.RegNum}> Register Your Number </Text>
      </View>
      <View >
        <Text style={styles.Text1}> Please choose your country code and enter your mobile number to get the verification code.</Text>
      </View>
      <View style={styles.TextInput1}>
        <TouchableOpacity
          onPress={() => setShow(true)}
          style={{
            width: '15%',
            height: 40,
            // backgroundColor: 'grey',
            padding: 10,
            borderBottomWidth: 1,
            borderBottomStyle : 'solid',
            borderBottomColor : '#0000006b',
          }}
          
        >
          <Text style={{
            color: 'black',
            fontSize: 11
          }}
          startIcon={<ArrowDropDownIcon />}
          >
            {countryCode}
          </Text>
        </TouchableOpacity>
        {/* For showing picker just put show state to show prop */}
        <CountryPicker
          show={show}
          // when picker button press you will get the country object with dial code
          pickerButtonOnPress={(item) => {
            setCountryCode(item.dial_code);
            setShow(false);
          }}
          
          
          popularCountries={['en', 'ua', 'pl']}
        />

        <TextField
          id="standard-basic"
          style={styles.TextInput2}
          label="Enter Number"
          variant="standard" />

{/* <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={countryCode}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> */}

        <ArrowCircleRightRoundedIcon
          style={styles.SubmitBtn}
          color="primary"
          fontSize='large'>
        </ArrowCircleRightRoundedIcon>
      </View>


      <View >
        <Text style={styles.Text2}> Read and accept the KadalaiApp 
          <Text style={{ color: 'blue' }}
            onPress={() =>  navigation.navigate('TermsService')}>
            &nbsp;Terms of Service and Privacy Policy
          </Text>
        </Text>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    // backgroundColor: 'aqua',
    // alignItems: 'center',
    // justifyContent: 'center',
    borderWidth: 2,
    // borderColor: 'red',
    fontWeight: 'bold',
    maxWidth: '390px',
    paddingRight: '32px',
    paddingLeft: '32px',
    // marginTop: '10px',
    // marginBottom: '0',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  loginHeader: {
    marginTop: '70px',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  logoImg: {
    marginTop: '27px',
    alignSelf: 'center',

  },
  RegNum: {
    marginTop: '30px',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',

  },
  Text1: {
    marginTop: '30px',
    textAlign: 'center',
  },
  TextInput1: {
    marginTop: 72,
    textAlign: 'center'
  },
  TextInput2: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    position: 'absolute',
    left: 75,
    marginTop: -10,
  },
  SubmitBtn: {
    position: 'absolute',
    right: 0,
  },
  Text2: {
    marginTop: 70,
    textAlign: 'center',
  },
});