import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';

import Container from './components/Container';

const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/search/cats' />} />
          <Route
            path='/search/:text'
            render={(props) => <Container {...props} />}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
