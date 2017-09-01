import React, { Component } from 'react';
import {  StyleSheet, Text, View ,ListView,Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import BookList from './components/BookList'
export default class PageOne extends Component {
    render() {
        
        return (
            
            <BookList />
            
            
         )
        }
}
