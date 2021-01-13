import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const IndexPage = React.lazy(() => import('pages/IndexPage'));
const Lifecycle = React.lazy(() => import('pages/Lifecycle'));
const SetState = React.lazy(() => import('pages/SetState'));
const EventExplain = React.lazy(() => import('pages/EventExplain'));
const Page404 = React.lazy(() => import('pages/Page404'));
const KeyExplain = React.lazy(() => import('pages/KeyExplain'));
const FormExplain = React.lazy(() => import('pages/FormExplain'));
const HocExplain = React.lazy(() => import('pages/HocExplain'));
/*
  IndexPage 基础部分
  Lifecyle 生命周期
  SetState setState的几种用法
  eventExplain 关于合成事件和原生事件 
  keyValue 关于遍历的key 
  formExplain 表单部分 

*/

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={(props) => <IndexPage {...props} />} />
            <Route exact path="/lifecycle" component={(props) => <Lifecycle {...props} />} />
            <Route exact path="/setState" component={(props) => <SetState {...props} />} />
            <Route exact path="/eventExplain" component={(props) => <EventExplain {...props} />} />
            <Route exact path="/keyExplain" component={(props) => <KeyExplain {...props} />} />
            <Route exact path="/formExplain" component={(props) => <FormExplain {...props} />} />
            <Route exact path="/hocExplain" component={(props) => <HocExplain {...props} />} />
            <Route path="/404" component={(props) => <Page404 {...props} />} />
            <Redirect to="/404" />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}
export default App;
