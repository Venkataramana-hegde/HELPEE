import { Component, type ReactNode } from "react";

interface ConstructorProps {
  title: string;
}

interface SuperProps {
  count: number;
}

class Counter extends Component<ConstructorProps, SuperProps> {
  constructor(props: ConstructorProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render(): ReactNode {
    return (
      <div className="flex items-center justify-center h-screen flex-col">
        <h1 className="text-3xl font-bold pb-[15px]">COUNTER</h1>
        <p className="text-xl font-bold pb-[15px]">Count: {this.state.count}</p>
        <div className="flex gap-2">
          <button
            onClick={this.increment}
            className="border-none bg-blue-500 p-[10px] rounded-md hover:bg-blue-600"
          >
            Increment
          </button>
          <button
            onClick={this.decrement}
            className="border-none bg-red-500 p-[10px] rounded-md hover:bg-red-600"
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
