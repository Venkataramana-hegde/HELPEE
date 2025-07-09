import { Component, type ReactNode } from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    title: ReactNode;
}
interface State {
    user: User[];
}


class FetchAPI extends Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            user: [],
        }
    }
    fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            this.setState({user: data})
        })
        .catch((error) => {
            console.log(error)
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.fetchData}>Fetch Data</button>
                {this.state.user.map((user) => (
                    <div key={user.id}>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default FetchAPI;