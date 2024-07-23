import { Provider } from 'react-redux';
import Body from './Components/Body';
import ReactDOM from 'react-dom/client';
import appStore from './utilis/appStore';
import { RouterProvider } from 'react-router-dom';
const AppLayout = () => {
  return (
    <Provider store = {appStore}>
      <Body/>
      </Provider> 
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);