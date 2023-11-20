// import { StatusBar } from 'expo-status-bar';
import { useState ,useEffect} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';

import { CountryPicker, CountryButton } from "react-native-country-codes-picker";
import TermsService from './TermsService';
// import {CountryList} from "react-native-country-codes-picker";
const image = require('../assets/logoKApp.png');

export default function StartPage({ navigation,route }) {
  
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNo, setPhoneNo] = useState("");

  //set error message for navigation to Verification page
  const [error,setError]=useState("")
  const [successMessage,setSuccessMessage]=useState("")
  //used to erase the error message after accept the terms and condition
  useEffect(()=>{
    if(route.params?.error===""){
      setSuccessMessage("Terms Accepted")
      setError("")
    }


   },[route.params?.error])

   const onVerification=()=>{
    //route.params?.isVariableTrue is passed from terms and condition
    //after accept the terms service it moves to verification page
    if(route.params?.isVariableTrue==="true"){
      navigation.navigate('Verification')
      setError("")
      if(route.params?.error===""){
        setError("")
      }
      
    }
    else{
      setError("Please read and accept the condition")
    }
  }
  

  const handleChange = (event) => {
    setCountryCode(event.target.value);
    
  };


  const handlePhoneNo = (event) => {

    // Allow only numbers 
    const numericValue = event.target.value.replace(/[^0-9]/g, "");
    setPhoneNo(numericValue);
  };

  
  return (
    <View style={styles.container}>
      <Text style={styles.loginHeader}>Welcome to KadalaiApp</Text>
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
            borderBottomStyle: 'solid',
            borderBottomColor: '#0000006b',
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
          style={styles.TextInput2}
          id="standard-basic"
          variant="standard"
          onChange={handlePhoneNo}
          value={phoneNo}
          inputProps={{ maxLength: 10 }}
          // keyboardType="numeric"
          placeholder="Enter number"
        />

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
          onClick={onVerification}
          style={styles.SubmitBtn}
          color="primary"
          fontSize='large'
         >
        </ArrowCircleRightRoundedIcon><br/>
        <view>
                <text style={{color:"red"}} >
                    {error ? <span>{error}</span>:""}
                </text>
            </view>
            <view>
                <text style={{color:"green"}} >
                    {successMessage ? <span>{successMessage}</span>:""}
                </text>
            </view>
        <Text style={styles.Text2}> Read and accept the KadalaiApp
          <Text style={{ color: 'blue' }}
            onPress={() => navigation.navigate('TermsService')}>
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
    marginTop: 8,
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