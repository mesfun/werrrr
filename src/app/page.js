// pages/index.js
import React from 'react';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch('https://api.jsonsilo.com/public/d1166487-7a88-4c53-9be7-94d20dbd04d4');
      const jsonData = await response.json();
      this.setState({ data: jsonData });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    return (
      <div>
        <h1>Data from JSON:</h1>
        <ul>
          {this.state.data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Index;
