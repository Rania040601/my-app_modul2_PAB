// // Class Component Counter
// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0 // Nilai awal counter
//         };
//     }

//     handleIncrement = () => {
//         // Menginkremen nilai counter
//         this.setState({ count: this.state.count + 1 });
//     }

//     handleDecrement = () => {
//         // Mengurangkan nilai counter
//         this.setState({ count: this.state.count - 1 });
//     }

//     render() {
//         return (
//             <div>
//                 <h2> {this.state.count}</h2>
//                 <button onClick={this.handleIncrement}>+</button>
//                 <button onClick={this.handleDecrement}>-</button>
//             </div>
//         );
//     }
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<Counter />);

import React, { useState } from 'react';

// Export function Counter
export default function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        // Menginkremen nilai counter
        setCount(count + 1);
    };

    const handleDecrement = () => {
        // Mengurangkan nilai counter
        setCount(count - 1);
    };

    return (
        <div>
            <h2>{count}</h2> {/* Menampilkan nilai counter */}
            <button onClick={handleIncrement}>+</button> {/* Tombol dengan event handler handleIncrement */}
            <button onClick={handleDecrement}>-</button> {/* Tombol dengan event handler handleDecrement */}
        </div>
    );
}
