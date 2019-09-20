import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import WifiApp from './WifiApp';
import { SelectedBizContext } from './contexts/SelectedBizContext';
import SelectedBiz from './SelectedBiz';

export default function Routes() {
  const { selectedBiz } = useContext(SelectedBizContext);

  return (
    <Switch>
      <Route exact path="/" render={() => <WifiApp />} />
      {/* <Route exact path={`/${selectedBiz.name}`} render={() => <BizItem />} /> */}
      <Route exact path={`/testing`} render={() => <SelectedBiz />} />
    </Switch>
  );
}
