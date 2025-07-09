import { Component } from "react";

interface State {
  count: number;
}

interface Props {
  title: string;
}

class LifeCycleMethods extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor: Initialized");
  }

  componentDidMount(): void {
    console.log("componentDidMount: Mounted");
  }

  componentDidUpdate(prevProps: Props, prevState: State): void {
    console.log("componentDidUpdate: Updated");
    console.log("Previous count:", prevState.count);
    console.log("Current count:", this.state.count);
  }

  componentWillUnmount(): void {
    console.log("componentWillUnmount: Unmounted");
  }

  increment = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  render() {
    console.log("Render: Re-rendering");
    return (
      <div className="p-5 m-5 border-2 border-dashed border-gray-400 flex flex-col items-center gap-4 rounded-lg">
        <h3 className="text-2xl font-bold">{this.props.title}</h3>
        <p className="text-xl">Count: {this.state.count}</p>
        <button
          onClick={this.increment}
          className="border-none bg-green-500 p-2 rounded-md hover:bg-green-600 text-white"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default LifeCycleMethods;
