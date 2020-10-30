import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function HomeDetailScreen(props) {

    const passProps = props.route.params.passProps || 'nothing get'

return (
<View style={styles.container}>
    <Text>ProfileScreenDetail ~ User</Text>
    <Text>{passProps.note}</Text>
    {/* <Button
            title='回上一頁'
            onPress={() =>props.navigation.pop()}
        />
        <Text>{name}</Text>
        <Button
        title='chang first food'
        onPress={()=>props.route.params.functionA('bnana')}
        />
    <StatusBar style="auto" /> */}
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
});
