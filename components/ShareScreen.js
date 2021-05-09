/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Share from 'react-native-share';


const ShareScreen = () => {

    const FBSubmit = async () => {
        const shareOption = {
            message: 'Try this Amazing App! From Facebook',
            social: Share.Social.FACEBOOK,
            url: 'https://www.google.com',

        };
        try {
            const shareResponse = await Share.shareSingle(shareOption);
            console.log(JSON.stringify(shareResponse));
        } catch (error) {
            console.log(error);
        }
    };
    const WhatsappSubmit = async () => {
        const shareOption = {
            message: 'Try this Amazing App!',
            social: Share.Social.WHATSAPP,
            url: 'https://www.google.com',
        };
        try {
            const shareResponse = await Share.shareSingle(shareOption);
            console.log(JSON.stringify(shareResponse));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Button title="Share On Facebook" onPress={FBSubmit} />
            </View>
            <View style={styles.container}>
                <Button title="Share On Whatsapp" onPress={WhatsappSubmit} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        padding: 10,
        backgroundColor: '#f1f1f1',
    },

});

export default ShareScreen;
