import React, { useState , useEffect } from 'react'
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
export default function Home() {

  const [users,setUsers] =useState([]);

  // const {id} = useParams()

  useEffect(()=>{
    loadUsers();

  },[])

  const loadUsers =async ()=>{
    const result =await axios.get("http://localhost:8080/users")
    setUsers( result.data);
  }

  const deleteUser = async (id)=>{
    await axios.delete(`http://localhost:8080/user/${id}`)
    loadUsers();
  }
  return (
    <div className='container'>
        <div className='py-4'>
          <div className="table-responsive">
            <table className="table table-striped
            table-hover	
            table-borderless
            table-primary
            align-middle border shadow">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>name</th>
                  <th>username</th>
                  <th>email</th>
                  <th>action</th>
                </tr>
                </thead>
                <tbody className="table-group-divider">
                  {users.map((user,index) =>(
                    <tr  key={index}>
                    <td key={index}>{index+1}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link className="btn btn-outline-primary btn-sm "  to={`/viewuser/${user.id}`}>View </Link>
                      <Link className="btn btn-outline-info btn-sm " to={`/edituser/${user.id}`} >Edit </Link>
                      <button className="btn btn-outline-danger btn-sm " onClick={()=> deleteUser(user.id)}>Delete </button>
                    </td>
                  </tr>
                  ))}
                  
                 
                </tbody>
                <tfoot>
                  
                </tfoot>
            </table>
          </div>
          
        </div>
    </div>
  )
}
