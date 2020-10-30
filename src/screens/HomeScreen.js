// import { StatusBar } from 'expo-status-bar';
import React ,{useState, useEffect}from 'react';
import { StyleSheet, View, Text,TouchableOpacity,Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
// import { set } from 'react-native-reanimated';


var MOCKED_DATA=[
    {
        id:'1',
        note:'恭喜你達成環島100次',
        date:'20200/1/28 14:00'
    },
    {
        id:'2',
        note:'恭喜你中了機車!',
        date:'20200/1/28 14:00'
    },
    {
        id:'3',
        note:'恭喜你中了汽車!',
        date:'20200/1/28 14:00'
    },
    {
        id:'4',
        note:'恭喜你中了鋼筆!',
        date:'20200/1/28 14:00'
    },
    {
        id:'5',
        note:'恭喜你中了Apple!',
        date:'20200/1/28 14:00'
    },

]

export default function HomeScreen(props) {

// const [food,setFood] =useState('candy')
const [dataSource,setDataSource] = useState([])

// const changeFood =(foodGet) =>{
//     setFood(foodGet)
// }

useEffect(()=>{
    var book  = MOCKED_DATA
    setDataSource(book)
})

const showNoticeDetail =(cases)=>{
    props.navigation.push('HomeDetailScreen',{passProps:cases})
}

const renderBook=(cases)=>{

    return(
            <TouchableOpacity onPress={()=>showNoticeDetail(cases)} >
                <View>
                    <View style={styles.MainView}>
                        
                        <View style={{flex:1 }}>
                            <Text　ellipsizeMode='tail' numberOfLines={3} style={{color:'black',fontSize:15,marginTop:8}}>

                                {cases.note}

                            </Text>
                            <Text ellipsizeMode='tail' style={{fontSize:13,marginTop:8,marginBottom:8}}>

                                {cases.date}

                            </Text>
                        </View>
                        <Image source={require('../../assets/img/iconfinder_Enter_728934.png')} styles={styles.image} />
                    </View>
                <View style={styles.sepertor}/>
                
                </View>
            </TouchableOpacity>
    )
}



return(   
    <View >
        {/* <Text>Hello~world!</Text>
            <Button
                title='goto home screen'
                onPress={()=>props.navigation.push('HomeDetailScreen',
                {name:'avon' , functionA:(arg)=>changeFood(arg)})}
            /> */}
        <FlatList
            data={dataSource}
            renderItem={cases =>renderBook(cases.item)}
            keyExtractor={cases =>cases.id}
            style={{backgroundColor:'white'}}
        />
        {/* <StatusBar style="auto" /> */}
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
MainView:{
    height:80,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    padding:8
},
sepertor:{
    height:1,
    backgroundColor:'#dddddd'
},
image:{
    width:20,
    height:30
}
});
