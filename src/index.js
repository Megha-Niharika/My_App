import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(
  <App/>,
    document.getElementById("root")
)



// class Car extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         brand: "Ford",
//         model: "Mustang",
//         color: "red",
//         year: 1964
//       };
//     }
//     render() {
//       return (
//         <div>
//           <h1>My {this.state.brand}</h1>
//           <p>
//             It is a {this.state.color}
            
//             {this.state.model}
            
//             from {this.state.year}.
//           </p>
//         </div>
//       );
//     }
//   }
  
  
   
//   ReactDOM.render(<Car />, document.getElementById('root'));