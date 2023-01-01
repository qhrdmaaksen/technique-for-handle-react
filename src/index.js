import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PropsParent from "./etc_study/etc_react_hello/propsSampleStudy/PropsParent";
import Counter from "./etc_study/etc_react_hello/stateSampleStudy/CounterTest";
import Say from "./etc_study/etc_react_hello/stateSampleStudy/Say";
import EventPractice from "./etc_study/etc_react_hello/eventSampleStudy/EventPractice";
import ValidationSample from "./etc_study/etc_react_hello/refSampleStudy/ValidationSample";
import ScrollBox from "./etc_study/etc_react_hello/scrollSampleStudy/ScrollBox";

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

/*// Say test
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Say />
    </React.StrictMode>
);*/

// scrollBox test
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// validation test
/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <ValidationSample />
    </React.StrictMode>
);*/

/*//EventPractice test
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <EventPractice />
    </React.StrictMode>
);*/

/*// counter test
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Counter />
    </React.StrictMode>
);*/

/*// props test
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <PropsParent />
    </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
