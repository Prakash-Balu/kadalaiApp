import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Linking, ScrollView, SafeAreaView } from "react-native";
import Button from "@mui/material/Button";
import { Icon } from '@rneui/themed';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";

import {
  CountryPicker,
  CountryButton,
} from "react-native-country-codes-picker";
import TermsService from "./TermsService";
// import {CountryList} from "react-native-country-codes-picker";
const image = require("../assets/logoKApp.png");

export default function StartPage({ navigation, route }) {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNo, setPhoneNo] = useState("");

  //set error message for navigation to Verification page
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  
  //used to erase the error message after accept the terms and condition
  useEffect(() => {
    if (route.params?.error === "") {
      setSuccessMessage("Terms Accepted");
      setError("");
    }
  }, [route.params?.error]);

  const onVerification = () => {
    //route.params?.isVariableTrue is passed from terms and condition
    //after accept the terms service it moves to verification page
    if (route.params?.isVariableTrue === "true") {
      navigation.navigate("Verification");
      setError("");
      if (route.params?.error === "") {
        setError("");
      }
    } else {
      setError("Please read and accept the condition");
    }
  };

  const handleChange = (event) => {
    setCountryCode(event.target.value);
  };

  const handlePhoneNo = (text) => {
    // Allow only numbers
    const numericValue = text.replace(/[^0-9]/g, "");
    setPhoneNo(numericValue);
  };

  return (
    <>
    <StatusBar />
    <SafeAreaView style={styles.container}>
      <>
      <View style={{flex: 0.5, justifyContent:'space-evenly'}}>
      <Text style={styles.loginHeader}>Welcome to KadalaiApp</Text>
      <Image source={image} style={styles.logoImg} />
      <Text style={styles.RegNum}> Register Your Number </Text>
      <Text style={styles.Text1}>
          Please choose your country code and enter your mobile number to get
          the verification code.
        </Text>
      </View>
      <View style={{flex:0.2 }}>
        
        
        
      <TouchableOpacity
          onPress={() => setShow(true)}
          style={{
            width: "13%",
            position: 'absolute',
            marginLeft:-20,
            height: 20,
            // backgroundColor: 'grey',
            // padding: 5,
            borderBottomWidth: 1,
            borderBottomStyle: "solid",
            borderBottomColor: "#0000006b",
          }}
          
        >
          
          <Text
            style={{
              color: "black",
              fontSize: 11,
              position:'absolute',
              
            }}
            
          >
            
            {countryCode}
          </Text>
          <Icon type="font-awesome-5" style={styles.icon} name="caret-down" size={20} color="#1B7DA4"/>
            
        </TouchableOpacity>

        {/* For showing picker just put show state to show prop */}

        <CountryPicker
          show={show}
          // when picker button press you will get the country object with dial code
          pickerButtonOnPress={(item) => {
            setCountryCode(item.dial_code);
            setShow(false);
          }}
          popularCountries={["en", "ua", "pl"]}
        />
        
<TextInput
        style={styles.TextInput1}
        value={phoneNo}
        placeholder={"Enter Mobile Number"}
        onChangeText={(text) => handlePhoneNo(text)}
        autoCapitalize={"none"}
      />
        <Icon type="font-awesome-5" style={styles.icon2} name="arrow-circle-right" size={20} color="#000"/>
      </View>
      </>
    </SafeAreaView>
  </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  loginHeader: {
    fontSize: 20,
    marginTop: "70px",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "capitalize",
  },
  logoImg: {
    marginTop: "27px",
    alignSelf: "center",
    width: 100,
    height: 100,
  },
  RegNum: {
    marginTop: "30px",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "capitalize",
  },
  Text1: {
    marginTop: "30px",
    textAlign: "center",
  },
  TextInput1: {
    width: '100%',
    position: 'relative',
    marginLeft: 40,
    marginTop: -8,
    borderBottomWidth: 1,
            
            borderBottomColor: "#0000006b",
  },
  TextInput2: {
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    marginBottom: 20,
    position: "absolute",
    left: 75,
    marginTop: 8,
  },
  icon: {
    marginLeft: 30,
    marginTop: -2,
  },
  icon2: {
    position: 'relative',
    zIndex:999,
    marginLeft: 200,
    marginTop: -10,
  }
});