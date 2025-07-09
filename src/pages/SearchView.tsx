import { Component } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

export class Search extends Component {
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
