import { Component } from "react";
import { useParams } from "react-router-dom";

interface Props {
  name: string;
  email: string;
}

class Dashboard extends Component<Props> {
  render() {
    const { name, email } = this.props;

    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-8 rounded-lg shadow-lg bg-white w-full max-w-sm flex justify-center items-center flex-col">
        <p>{name}</p>
        <p>{email}</p>
      </div>
      </div>
    );
  }
}

const DashboardWrapper = () => {
  const { name = "", email = "" } = useParams();

  return (
    <Dashboard
      name={decodeURIComponent(name)}
      email={decodeURIComponent(email)}
    />
  );
};

export default DashboardWrapper;
