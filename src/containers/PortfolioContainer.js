import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '../styles/PortfolioContainer.css';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import projectItems from '../data/ProjectItem';

const PortfolioContainer = () => {

    const [items] = useState(projectItems);

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={ <Home /> }></Route>
                <Route path='/about' element={ <About /> }></Route>
                <Route path='/projects' element={ <Projects items={items} /> }></Route>
            </Routes>
        </Router>
    );
}
 
export default PortfolioContainer;