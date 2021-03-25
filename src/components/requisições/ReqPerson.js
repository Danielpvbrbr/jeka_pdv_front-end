import React, { Component } from 'react';
import axios from 'axios';

import API from './api';

export default class ReqPerson extends Component {
  componentDidMount = () => {
    API.post(``)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

}
