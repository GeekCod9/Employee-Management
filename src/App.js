import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import List from './components/list';
import Search from './components/search';
import Footer from './components/footer';
import Header from './components/header';


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      events:[]
    }
  }
  render(){
    return (
      <div>
        <Header />
        <Navbar />
        <List />
        <Search />
        <Footer />
      </div>
    );
  }
}

export default App;
