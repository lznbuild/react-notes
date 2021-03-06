import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { hasRepeat, isRepeat, getQueryParmas } from '@conan/zdt-utils';

const IndexPage = React.lazy(() => import('pages/IndexPage'));
const Lifecycle = React.lazy(() => import('pages/Lifecycle'));
const SetState = React.lazy(() => import('pages/SetState'));
const EventExplain = React.lazy(() => import('pages/EventExplain'));
const KeyExplain = React.lazy(() => import('pages/KeyExplain'));
const FormExplain = React.lazy(() => import('pages/FormExplain'));
const HocExplain = React.lazy(() => import('pages/HocExplain'));
const Page404 = React.lazy(() => import('pages/Page404'));
const SplitExplain = React.lazy(() => import('pages/SplitExplain'));
const ErrorExplain = React.lazy(() => import('pages/ErrorExplain'));
const HookExplain = React.lazy(() => import('pages/HooksExplain'));
/*
  IndexPage 基础部分
  Lifecyle 生命周期
  SetState setState的几种用法
  EventExplain 关于合成事件和原生事件 
  keyValue 关于遍历的key 
  FormExplain 表单部分 
  HocExplain 高阶组件部分
*/

class App extends React.Component {
  componentDidMount() {
    console.log('===============');
    console.log(hasRepeat([1, 1, 2]), isRepeat(3, [2, 3]));
    console.log('===============');
  }
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
            <Route exact path="/splitExplain" component={(props) => <SplitExplain {...props} />} />
            <Route exact path="/errorExplain" component={(props) => <ErrorExplain {...props} />} />
            <Route exact path="/hookExplain" component={(props) => <HookExplain {...props} />} />
            <Route path="/404" component={(props) => <Page404 {...props} />} />
            <Redirect to="/404" />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}
export default App;
