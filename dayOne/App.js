import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import {  Text, View ,ListView,Image } from 'react-native';

import BookList from './components/BookList'

export default class App extends React.Component {
  render() {
    return (<Router>
<Scene key="root">
<Scene key="pageOne" component={PageOne} title="Books" initial={true} />
<Scene key="pageTwo" component={PageTwo} title="info" />
</Scene>
</Router>
    )
  }
}


