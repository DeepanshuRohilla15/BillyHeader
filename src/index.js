import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider} from './context/context';

import App from './App';
import './index.css';

ReactDOM.render(
      <SpeechProvider appId="6252a128-eb9b-4552-a3c3-3bfdf423b111" language="en-US">
            <Provider>
            <App />
      </Provider>

      </SpeechProvider>,
      
      document.getElementById('root')
);