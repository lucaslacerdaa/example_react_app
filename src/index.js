import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './features/welcome';
import users_data from './_assets/json/users_data'

const title = '🎇 Example App';
const footer_desc = '© Copyright 2021 DFE Course.';

ReactDOM.render(
  <Welcome  title={title} sectionData={users_data} footer_desc={footer_desc} />
  ,
  document.getElementById('root')
);
