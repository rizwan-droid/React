import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './style/App';
// import FunctionalRef from './Ref/FunctionalRef';
// import ClassRef from './Ref/ClassRef';
import Portal from './Portals/Portal'
import Header from './Portals/Header'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FunctionalRef/> */}
    {/* <ClassRef/> */}
    <Portal/>
    <Header/>
  </React.StrictMode>
);


