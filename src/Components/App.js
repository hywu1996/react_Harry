import React from 'react';
import Welcome from './Welcome';
import Header from './Header';
import About from './About';
import Resume from './Resume';
import Footer from './Footer';
import More from './More';
import '../styles/main.css';
import '../styles/font-awesome.min.css'

const App = () => (
    <div className="App">
        <Welcome />
        <About /> 
        <Resume />  
        <More />
        <Footer />
    </div>
);

export default App;