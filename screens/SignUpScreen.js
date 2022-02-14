import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const SignUpScreen = () => {
    return (
        <View style={styles.container}>
            <Text>SignUpScreen</Text>
            <Button
            title="Click Here"
            onPress={() => alert('SignUpScreen')}
            />
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
        container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})