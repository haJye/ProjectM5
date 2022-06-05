import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./sqlusers.css";

function Sqlusers() {
  const [data, Setdata] = useState([]);

  const getData = async () => {
    const { data } = await axios.get("http://localhost:5000/admin");
    Setdata(data);
  };

  const deleteUser = async (id) =>{
       axios.delete(`http://localhost:5000/admin/${id}`)
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="divkeeper">
        <table className="tablekeeper">
          <thead >
            <tr>
              <th>Username</th>
              <th>Password</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item=>{
              return (
                <tr key={item.id}>
                  <td>{item.username} </td>
                  <td>{item.password}</td>
                  <td>{item.email}</td>
                  <td><button onClick={()=>{deleteUser(item.id)}} className="dltbtn"> Delete </button></td> 
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Sqlusers;
