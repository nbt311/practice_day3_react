import {Component} from "react";

class Hello extends Component {
    componentWillUnmount() {
        alert("The component is going to be unmounted");
    }
    render() {
        return <h1 style={{textAlign: "center"}}>Hello World!!!</h1>
    }
}
export default Hello;