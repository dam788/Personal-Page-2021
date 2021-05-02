import React from 'react';
import ResumeButtons from './ResumeButtons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Experience, Habilities, Formation } from './';

const ResumeCV = () => {
  return (
    <>
      <Router>
        <ResumeButtons />
        <Switch>
          <Route path='/resume/habilities' component={Habilities} />
          <Route path='/resume/formation' component={Formation} />
          <Route path='/resume/experience' component={Experience} />
        </Switch>
      </Router>
    </>
  );
};

export default ResumeCV;
