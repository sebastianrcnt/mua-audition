import React from 'react';
import { HashRouter, Link, Route, Router, Switch } from 'react-router-dom';
import axios from 'axios'
import './App.css'
import Navigation from './components/Navigation';
import ApplicantsView from './components/ApplicantsView';
import ApplicantDetailView from './components/ApplicantDetailView';


class App extends React.Component {
  state = {
    isReady: false,
  }

  componentDidMount() {
    axios.get('http://sebastianrcnt.iptime.org/api/applications/secret?secret=mua130226')
      .then((data) => {
        var applicants = data.data;
        this.setState({ applicants, isReady: true })
      })
  }

  getApplicantById(id, applicants) {
    for (var applicant of applicants) {
      if (applicant._id == id) {
        return applicant
      }
    }

    return null;
  }

  render() {
    var { isReady, applicants } = this.state

    return (
      <div id='body'>
        <HashRouter>
          <Navigation />
          <div className='content'>
            <Route path={['/', '/applicants']} exact={true}>
              {isReady ? <ApplicantsView applicants={applicants} /> : 'Loading...'}
            </Route>
            <Route path={['/applicant-details/:id']} exact={true} render={
              (props) => {
                if (isReady && applicants) {
                  var applicant = this.getApplicantById(props.match.params.id, applicants);
                  return <ApplicantDetailView applicant={applicant}/>
                } else {
                  return null;
                }
              }
            } />
          </div>
        </HashRouter>
      </div>
    )
  }
}

export default App;