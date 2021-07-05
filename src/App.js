import React, { useEffect } from 'react';
import Navbar from './components/Navbar/navbar.jsx';
import About from './components/about/about.jsx';
import Projects from './components/projects/Projects.jsx';
import WorkExperience from './components/workExperience/workExperience.jsx';
import Certificates from './components/certificateSection/certificates.jsx';
import Skills from './components/skills/Skills.jsx';
import Footer from './components/footer/footer.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
      return (
            <BrowserRouter>
                  <Switch>
                        <Route path='/' exact>
                              <Navbar />
                              <About />
                              <Projects />
                              <WorkExperience />
                              <Certificates />
                              <Skills />
                              <Footer />
                        </Route>
                  </Switch>
            </BrowserRouter>
      );
};

export default App;