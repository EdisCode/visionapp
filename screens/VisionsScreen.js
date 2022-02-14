import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const VisionScreen = () => {
    return (
        <View style={styles.container}>
            <Text>VisionScreen</Text>
            <Button
            title="Click Here"
            onPress={() => alert('VisionScreen')}
            />
        </View>
    );
};

export default VisionScreen;

const styles = StyleSheet.create({
        container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})