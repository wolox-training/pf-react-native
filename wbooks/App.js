import React, { Fragment } from 'react';

import MyApp from './src/app/index';

if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

export default function index() {
  return (
    <MyApp />
  );
}
