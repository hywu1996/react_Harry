import React from 'react';
import Welcome from './Welcome';
import Header from './Header';
import About from './About';
import Resume from './Resume';
import Footer from './Footer';
import '../styles/main.css';

const App = () => (
    <div className="App">
        <Header />
        <About /> 
        <Resume />  
        <Welcome />
        <Footer />
    </div>
);

export default App;