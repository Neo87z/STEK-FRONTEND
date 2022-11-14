import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import SpeechEvalucate from './pages/SpeechEvaluvate';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Contact from './pages/Contact';
import Help from './pages/Help';
import SignIn from './pages/SignIn';
import GetCitationTopic from './pages/citedata';
import CitationResults from './pages/CitationResults';
import GetEssayTopic from './pages/GetEssayTopic';
import SignUp from './pages/SignUp';
import GetVerbSentence from './pages/GetVerbSentence';
import EssayResults from './pages/EssayResults';
import EssayHome from './pages/EssayHome';
import VerbHome from './pages/VerbHome';
import CitationHome from './pages/citationHome';
import SpeechHome from './pages/SpeechHome';
import ResetPassword from './pages/ResetPassword';
import PageNotFound from './pages/PageNotFound';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
      
        <Route exact path="/" element={<Home />} />
        <Route path="/citation-results" element={<CitationResults />} />
        <Route path="/citation-data" element={<GetCitationTopic />} />
        <Route path="/citation-home" element={<CitationHome />} />
        <Route path="/get-sentence-verb" element={<GetVerbSentence />} />
        <Route path="/essay-results" element={<EssayResults />} />
        <Route path="/essay-home" element={<EssayHome />} />
        <Route path="/get-essay-topic" element={<GetEssayTopic />} />
        <Route path="/verb-home" element={<VerbHome />} />
        <Route path="/speech-recognition" element={<SpeechHome />} />
        <Route path="/speech-record" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/speech-evaluvate" element={<SpeechEvalucate />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-post" element={<BlogPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
