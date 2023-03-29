import * as React from 'react';
import './style.css';
import Compo1 from './components/Compo1';
import Fun2 from './components/listgrp';
import Fun3 from './components/Count';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Compo1/>
      <Fun2/>

      <Fun3/>
    </div>
  );
}
