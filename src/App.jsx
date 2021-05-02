import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Porfolio, Resume } from './routes';
import { Card, Navbar } from './components';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Navbar />
          <Card />
        </div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/resume/habilities' component={Resume} />
          <Route path='/porfolio' component={Porfolio} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
