import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Home from './layout/home/home';
import ButtonSandbox from './components/Button/Sandbox';
import ButtonGroupSandbox from './components/Button-group/Sandbox';
import IconSandbox from './components/Icon/Sandbox';
import ImageSandbox from './components/Image/Sandbox';
import ChipSandbox from './components/Chip/Sandbox';
import BadgeSandbox from './components/Badge/Sandbox';
import ListGroupSandbox from './components/List-group/Sandbox';
import InputSandbox from './components/Input/Sandbox';
import TabbarSandbox from './components/Tabbar/Sandbox';
import TooltipSandbox from './components/Tooltip/Sandbox';
import ModalSandbox from './components/Modal/Sandbox';

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/button" component={ButtonSandbox} />
        <Route path="/button-group" component={ButtonGroupSandbox} />
        <Route path="/icon" component={IconSandbox} />
        <Route path="/image" component={ImageSandbox} />
        <Route path="/chip" component={ChipSandbox} />
        <Route path="/badge" component={BadgeSandbox} />
        <Route path="/list-group" component={ListGroupSandbox} />
        <Route path="/input" component={InputSandbox} />
        <Route path="/tabbar" component={TabbarSandbox} />
        <Route path="/tooltip" component={TooltipSandbox} />
        <Route path="/modal" component={ModalSandbox} />
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();