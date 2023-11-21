import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CloseIcon from '@mui/icons-material/Close';

export default function TermsService({navigation}) {
    //to verify the check box
    const [isVerify,setIsVerify]=useState(false)
    // set the error based on check box
    const [error,setError]=useState("")

    const handleChange=(e)=>{
         const value=e.target.value
       
        setIsVerify((value)=>(!value))
        
        
        if(!e.target.value){
            setError("please read and accept the terms and conditions");
        }else{
            setError("")
        }
        
        
    }

    const handleSubmit=()=>{
        if(!isVerify){ 
            setError("please read and accept the terms and conditions") 
        }
        else{
            
            navigation.navigate('StartupPage' , { isVariableTrue: "true" , error:"" })
            
            setError("")
        }
       

    }
    
    return (
            
       
        <ScrollView style={styles.container}>

            <CloseIcon style={{
                position: "fixed",
            right: "10px",
            cursor: "pointer",
            marginTop : "10px",
            }}
            onClick={() => navigation.goBack()}
            />
    
            <Text style={{ fontWeight: "bold", fontColor: "black", marginTop : "10px" }}>
                Terms Of Service<br></br>
                <br></br>
            </Text>
            <Text style={{ fontWeight: "normal", fontColor: "black" }}>

                1. Acceptance of Terms<br></br>
                By using this kadalai app, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please do not use the application.<br></br>
                2. User Conduct<br></br>
                You agree to use the kadalai app in a responsible and lawful manner.<br></br>
                You shall not engage in any malicious or disruptive behavior, including spamming, harassment, or distributing harmful content.<br></br>
                3. Privacy and Data Collection<br></br>
                We respect your privacy. Please refer to our Privacy Policy for details on how we collect, use, and protect your data.
                By using this application, you consent to the collection and use of your information as described in our Privacy Policy.<br></br>
                4. Account Security<br></br>
                You are responsible for maintaining the confidentiality of your account credentials.<br></br>
                You agree to notify us immediately of any unauthorized access or use of your account.<br></br>
                5. User Content<br></br>
                Any content you share or post on the chat application must not infringe upon the rights of others, including intellectual property rights.<br></br>
                We do not claim ownership of your content, but you grant us a license to use, modify, or distribute it within the application.<br></br>
                6. Disclaimer of Warranties<br></br>
                The kadalai app is provided "as is" without warranties of any kind.
                We do not guarantee uninterrupted or error-free operation.<br></br>
                7. Changes to Terms and Conditions<br></br>
                We reserve the right to modify these terms and conditions at any time. Updated terms will be posted on the application.<br></br>
                <br></br>

                <Text style={{ fontWeight: "bold", fontColor: "black" }}>
                    Privacy Policy
                </Text><br></br><br></br>

                This privacy policy explains how KadalaiApp collects, uses, and shares your personal information when you use our chat application.<br></br>

                Information We Collect<br></br>

                We collect the following types of information from you:<br></br>

                Information you provide to us: This includes information you provide when you create an account, such as your name, email address, and phone number. It may also include information you provide when you chat with other users, such as your profile picture and the content of your chats.
                Information we collect automatically: This includes information about your device and how you use our chat application, such as your IP address, device type, operating system, and browser type. We may also collect information about your location, but only with your consent.
                How We Use Your Information<br></br>

                We use your information to provide and improve our chat application. This includes using your information to:<br></br>

                Allow you to create an account and chat with other users.
                Provide you with support and troubleshoot problems.
                Send you notifications about new features and updates.
                Improve our chat application and develop new features.
                How We Share Your Information<br></br>

                We do not share your personal information with third parties for marketing or advertising purposes. We may share your information with third party service providers who help us provide our chat application, such as web hosting providers and customer support providers. We require all third party service providers to agree to keep your information confidential and to use it only for the purposes of providing us with services.<br></br>

                Your Choices<br></br>

                You have the following choices about how we use your information:<br></br>

                You can opt out of receiving notifications from us by changing your settings in the app.<br></br>
                You can delete your account and all of your associated data at any time by contacting us.<br></br>
                Security<br></br>

                We take reasonable steps to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee the absolute security of your information.<br></br>

                Changes to This Privacy Policy<br></br>

                We may update this privacy policy from time to time. If we make any significant changes, we will notify you by email or by posting a notice on our website.<br></br>

                In addition to the above, the following privacy policy content may be relevant for a chat application:<br></br>

                Collection and use of location data: If your chat application collects location data, you should explain how you collect this data, how you use it, and how users can opt out of having their location data collected.<br></br>
                Handling of chat content: You should explain how you handle the content of user chats, such as whether you store or monitor chat content, and whether you disclose chat content to third parties.<br></br>
                Data retention: You should explain how long you retain user data, and how users can request that their data be deleted.
                Children's privacy: If your chat application is intended for use by children, you should explain how you comply with applicable children's privacy laws and regulations.
                You should also tailor your privacy policy to the specific features and functionality of your chat application. For example, if your chat application offers end-to-end encryption, you should explain how this encryption works and how it protects user privacy.
            </Text>
            <br></br>
            
            <FormControlLabel control={<Checkbox />} onChange={handleChange}
            label="By using the kadalaiapp, you acknowledge that you have read and agreed to these terms and conditions." />
            <br></br>
            <view>
                <text style={{color:"red"}}>
                    {error ? <span>{error}</span>:""}
                </text>
            </view>
            <Button title="Continue" onPress={handleSubmit} value="Continue" />
            <br></br>
            
           
        </ScrollView>
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
        // marginBottom: '60px',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
});