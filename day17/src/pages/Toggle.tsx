import { Component, type ReactNode } from "react";
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";

interface ToggleProps {
  title: string;
}

interface ToggleState {
  on: boolean;
}

class Toggle extends Component<ToggleProps, ToggleState> {
  constructor(props: ToggleProps) {
    super(props);
    this.state = {
      on: false,
    };
  }
  toggle = () => {
    this.setState((prevState) => ({ on: !prevState.on }));
  };

  render(): ReactNode {
    const { on } = this.state;
    return (
      <div className="flex items-center justify-center h-screen flex-col gap-4">
        <h1 className="text-3xl font-bold">TOGGLE</h1>
        <div className="text-5xl">
          {on ? <FaToggleOn color="green" /> : <FaToggleOff />}
        </div>
        <p className="text-xl font-bold">The toggle is {on ? "ON" : "OFF"}</p>
        <button
          onClick={this.toggle}
          className="border-none bg-blue-500 p-[10px] rounded-md hover:bg-blue-600 text-white"
        >
          Toggle
        </button>
      </div>
    );
  }
}

export default Toggle;