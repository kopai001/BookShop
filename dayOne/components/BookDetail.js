import React from 'react';
import PageOne from '../PageOne';
import PageTwo from '../PageTwo';
import { Actions } from 'react-native-router-flux';

import{TouchableHighlight,StyleSheet,Text,View,ListView,Image}from 'react-native';

export default class BookDetail extends React.Component {
    constructor(props){
        super(props)
    }

press=(props)=>{
    let send={title:this.props.title,author:this.props.author,description:this.props.description,book_image:this.props.book_image}
    Actions.pageTwo(send);
    console.log(send)
    
}

render(){
    return(
        <TouchableHighlight onPress={this.press}>
        <View style={styles.container} >
            <Image source={{uri:this.props.book_image}} style={styles.image} resizeMode="contain"/>
            <View  >

            <Text style={styles.authorText}>{this.props.author}</Text>
            <Text>{this.props.title}</Text>
            </View>
            
        </View>    
        </TouchableHighlight>
    )
}



}

const styles = StyleSheet.create({
    container:{
        height:100,
        flexDirection: 'row'
    },
    image:{
        width:60,
        //flex:1
    },
    detailContainer:{
        
        flex:3,
        justifyContent:'center'
    },authorText:{
        color: '#555555',
        fontStyle:'italic'
    }
})
