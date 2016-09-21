import React from 'react';
import Header from './header/header.js';
import Container from './container/container.js';

export default class App extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Container />
            </div>
        )
    }
}