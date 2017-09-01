import React from 'react';

import { StyleSheet, Text, View ,ListView,Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import BookDetail from './BookDetail'

let Books=[]
export default class BookList extends React.Component {
  constructor(props){
    super(props)
    let ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1!==r2})
    this.state={
        dataSourse: ds.cloneWithRows(Books),
        
    }
  }

  componentWillMount(){
    fetch('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction?response-format=json&api-key=73b19491b83909c7e07016f4bb4644f9:2:60667290')
    .then((response)=>response.json())
    .then((responseJSON)=>{
        Books=responseJSON.results.books
        this.setState({
            dataSourse: this.state.dataSourse.cloneWithRows(Books)
        })
    })
  }



  _renderRow(rowData){
   
    return <BookDetail {...rowData}/>
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView dataSource={this.state.dataSourse} renderRow={this._renderRow} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
marginTop:10,
    backgroundColor: '#fff',
    
    justifyContent: 'center',
  },
});