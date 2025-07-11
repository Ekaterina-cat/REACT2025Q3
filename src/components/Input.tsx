import { Component } from 'react';

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class Input extends Component<InputProps> {
  render() {
    return (
      <input
        type="text"
        value={this.props.value}
        onChange={this.props.onChange}
        placeholder="Search..."
        className="bg-gray-200 p-2 rounded"
      />
    );
  }
}

export default Input;
