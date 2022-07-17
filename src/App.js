import './App.css';
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects'
import { Amplify, Analytics, Auth } from 'aws-amplify';
// import Auth from '@aws-amplify/auth';
import awsConfig from './aws-exports';
// import SkillCert from './pages/SkillCerts';


function App() {

  Amplify.configure(awsConfig)
  
  const amplifyConfig = {
    Auth: {
      identityPoolId: 'us-east-1:1e890778-e3bb-465e-94b9-12fc909db099',
      region: 'us-east-1'
    }
  }
  //Initialize Amplify
  Auth.configure(amplifyConfig);
  
  const analyticsConfig = {
    AWSPinpoint: {
          // Amazon Pinpoint App Client ID
          appId: '68ff630009634e2ab1bf059e15f49eae',
          // Amazon service region
          region: 'us-east-1',
          mandatorySignIn: false,
    }
  }
  
  Analytics.configure(analyticsConfig)

  Analytics.autoTrack('session', {
      enable: true,
    })

  Analytics.autoTrack('pageView', {
    enable: true,
    eventName: 'pageView',
    getUrl: () => {
      // the default function
      return window.location.origin + window.location.pathname;
  }
  })

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/skills" element={<SkillCert />} /> */}
      </Routes>
    </div>
  );
}

export default App;
