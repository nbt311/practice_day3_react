// import {Component} from "react";
import Hello from "./Hello";

// class DeleteComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             display: true
//         }
//     }
//
//     delete = () => {
//         this.setState({display: false});
//     }
//
//     render() {
//         let comp;
//         if (this.state.display) {
//             comp = <Hello/>
//         }
//         return (
//             <div style={{textAlign: 'center'}}>
//                 {comp}
//                 <button onClick={this.delete}>
//                     Delete the component
//                 </button>
//             </div>
//         );
//
//     }
// }
import {useState,useEffect} from "react";

function DeleteComponent() {
    const [display, setDisplay] = useState(true);
    const deleteComponent = () => {
        setDisplay(false);
    };

    let comp;
    if (display) {
        comp = <Hello />;
    }

    return (
        <div style={{ textAlign: 'center' }}>
            {comp}
            <button onClick={deleteComponent}>Delete the component</button>
        </div>
    );
}
export default DeleteComponent;