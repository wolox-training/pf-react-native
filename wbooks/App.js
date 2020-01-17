import App from './src/app';

if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

export default function index() {
  return (
    <App />
  );
}
