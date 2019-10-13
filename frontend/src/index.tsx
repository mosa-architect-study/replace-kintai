import * as React from 'react';
import { render } from 'react-dom';

const Hello: React.FC = () => (
  <p> Hello World</p>
);

render (<Hello />, document.getElementById("app"));