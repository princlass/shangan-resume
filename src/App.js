import React, {useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import ResumeHeader from './components/ResumeHeader';
import ResumeContent from './components/resume-contents/ResumeContent';
import Grid from '@material-ui/core/Grid';
import ReactGA from 'react-ga';

function App() {
  // componentDidMount
  useEffect(() => {
    ReactGA.initialize('UA-175988035-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
      <Grid container justify="center">
          <Grid container item xs={4}>
            <ResumeHeader />
          </Grid>
          <Grid container item xs={8}>
            <ResumeContent />
          </Grid> 
      </Grid>
  );
}

export default App;
