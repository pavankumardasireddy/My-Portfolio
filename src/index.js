import React from 'react';
import ReactDOM from 'react-dom';
import ScrollToTop from 'react-scroll-up';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    (
        <div>
            <App />
            <ScrollToTop showUnder={160}>
                <span title="Go To Top"><i className="scroll-top fa fa-arrow-up" aria-hidden="true" /></span>
            </ScrollToTop>
        </div>
    ),document.getElementById('root')
);
registerServiceWorker();
