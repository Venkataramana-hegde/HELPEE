import { Component, type ChangeEvent, type ReactNode } from "react";
import { useNavigate, type NavigateFunction } from "react-router-dom";

interface Props {
  title: ReactNode;
  navigate: NavigateFunction;
}

interface State {
  userName: string;
  email: string;
  password: string;
}

class LoginPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      password: "",
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value } as Pick<
      State,
      keyof State
    >);
  };

  handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const { userName, email } = this.state;
    if (userName && email) {
      const urlName = encodeURIComponent(userName);
      const urlEmail = encodeURIComponent(email);
      this.props.navigate(`/dashboard/${urlName}/${urlEmail}`);
    } else {
      alert("Please fill the details");
    }
  };

  render() {
    const { title } = this.props;
    const { userName, email, password } = this.state;

    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-8 rounded-lg shadow-lg bg-white w-full max-w-sm">
        <form onSubmit={this.handleLogin} className="flex flex-col">
          <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
          <div>
            <label htmlFor="userName">Name: </label>
            <input
              name="userName"
              value={userName}
              onChange={this.handleChange}
              placeholder="name"
              className="border p-2 w-full my-2"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="email"
              className="border p-2 w-full my-2"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="password"
              className="border p-2 w-full my-2"
            />
          </div>
          <button type="submit" className="border-none bg-blue-500 p-[10px] rounded-md hover:bg-blue-600 text-white">Login</button>
        </form>
        </div>
      </div>
    );
  }
}

const LoginPageWrapper = (props: { title: ReactNode }) => {
  const navigate = useNavigate();
  return <LoginPage {...props} navigate={navigate} />;
};

// export default LoginPage
export default LoginPageWrapper;
