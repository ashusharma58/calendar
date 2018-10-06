import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
       <div className="container">
       
        <table class="table table-bordered" onload="load()">
                   <thead>
                     <tr class="head-row">
                         <th></th>
                       <th>Sun
                           <p>1</p>
                       </th>
                       <th>Mon<p>2</p>
                       </th>
                       <th>Tues
                           <p>3</p>
                       </th>
                       <th>Wed
                           <p>4</p>
                       </th>
                       <th>Thu
                           <p>5</p>
                       </th>
                       <th>Fri<p>6</p>
                       </th>
                       <th>Sat
                           <p>7</p>
                       </th>
   
                     </tr>
                   </thead>
                   <tbody>
                     <tr>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
   
                     </tr>
                 
                     
                    
                   </tbody>
                 </table>
   
            
                 
   </div>
  
      </div>
    );
  }
}

export default App;
