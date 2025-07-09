import { Component } from 'react';
import Input from './Input';
import Button from './Button';

class Main extends Component {
  render() {
    return (
      <>
        <div>
          <div>
            <Input />
            <Button />
          </div>
          <div></div>
        </div>
      </>
    );
  }
}

export default Main;
