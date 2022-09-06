//http methods
//1. get() is used to get the data from the back end. // reading data from backend
//2. post() is used to send the data from front to back end.// create a data for first time
//3. put() it is used to update existing data. //update
//4. patch() will update only changed value.//update
//5. delete() is used to delete an item.//deleting

import React,{useEffect, useState} from 'react';
import axios from "axios";

function Addproducts() {
    const[user, setUser] =useState([]);
    
    useEffect(() => {
        fetchusers();
    }, []);

    const fetchusers= async() =>{
        const res= await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(res);
        setUser(res.data);
        
    };

  return (
    <div>
    <table>
        <tr> 
        <th> ID</th>
        <th> Name</th>
        </tr>
        {user.map((val) => {
            return (
 <tr>
   <td>{val.id} </td>
   <td>{val.name} </td>
 </tr>
            );
        })}
            

    
    </table>
      
    </div>
  );
}

export default Addproducts
