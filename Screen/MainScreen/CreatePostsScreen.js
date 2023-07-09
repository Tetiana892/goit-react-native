import React from "react";
import { View, Text, StyleSheet } from "react-native";
const CreatePostsScreen =( )=>{
    return(
        <View style={styles.container}>
            <Text>Створити публікацію</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    }
});
export default CreatePostsScreen;