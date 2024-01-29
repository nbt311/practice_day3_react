// import {Component} from "react";
//
// class ChangeColor extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             color: "black"
//         }
//     }
//     componentDidMount() {
//         setTimeout(() =>{
//             this.setState({color: "pink"})
//         },5000);
//     }
//     render() {
//         return (
//             <div>
//                 <div
//                     style={{
//                         backgroundColor: this.state.color,
//                         paddingTop: 20,
//                         width: 400,
//                         height: 80,
//                         margin: 'auto'
//                     }}
//                 />
//             </div>
//         )
//     }
// }
import {useState,useEffect} from "react";

function ChangeColor(){
    const [color, setColor] = useState("black")
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setColor("pink");
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, []);
    return (
        <div>
            <div
                style={{
                    backgroundColor: color,
                    paddingTop: 20,
                    width: 400,
                    height: 80,
                    margin: 'auto'
                }}
            />
        </div>
    )
}
export default ChangeColor;