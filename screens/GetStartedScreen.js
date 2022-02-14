import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const GetStartedScreen = () => {
    return (
        <View style={styles.container}>
            <Text>GetStartedScreen</Text>
            <Button
            title="Click Here"
            onPress={() => alert('GetStartedScreen')}
            />
        </View>
    );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
        container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})