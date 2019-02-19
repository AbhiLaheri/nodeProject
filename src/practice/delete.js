// import React, { Component } from 'react';
// import Push from '../push'
// export default class Delete extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             arr:[1,2,3],
//             age:0
            
//           }
//       }
     
//     delete=(index)=>{
//       console.log(index);
//         this.state.arr.splice(index,1) ;
//         this.setState({
//            arr:this.state.arr
//         })
//     }

//       render() {
//         return (
//           <div>
//            <center>
//             <div>
              
//                {this.state.arr.map((single)=>
                  
//                   <li style={{color:"red"}} >{single}
//                     <button onClick={()=>{
//                       this.delete(this.state.arr.indexOf(single));
//                     }}>
//                           delete
//                     </button>
//                   </li>)}
               
//             </div>
//            </center>

//           </div>
//         )}
// }