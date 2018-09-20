import React, { Component } from 'react';
import { render } from 'react-dom';
import Axios from 'axios';

    // component that will display the data
import List from './List';
import LoadingSpinner from './loadingSpinner';

    class LoadingDemo extends Component {
      constructor(props) {
        super(props);
        this.state = {
          data: [], // will hold the results from our ajax call
          loading: false, // will be true when ajax request is running
        }
      }

      onClick = () => {
        this.setState({ loading: true }, () => {

          Axios.get('/options')
            .then(response => this.setState({
              loading: false,
              data: response.data,
            }));
        });
      }

      render() {
        const { data, loading } = this.state;

        return (
          <div>
            <button onClick={this.onClick}>
              Load Data
            </button>

            {/*
              Check the status of the 'loading' variable. If true, then display
              the loading spinner. Otherwise, display the results.
            */}
            {loading ? <LoadingSpinner /> : <List results={data} />}
          </div>
        );
      }
    }