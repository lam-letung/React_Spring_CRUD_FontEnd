import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {

    const [user , setUser] = useState({
        name:"",
        username:"",
        email:""
    })

    const {id} = useParams()

    useEffect(()=>{
          loadUser()
    },[])

    const loadUser= async() => {
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }
    
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User detail</h2>

        <div class="card">
            <div class="card-header">
                Detail of user id
            </div>
            <div class="card-body">
              <div>  name: {user.name}</div>
                <div>email:{user.email}</div>
                <div>username: {user.username}</div>
            </div>
            <div class="card-footer text-muted">
                Footer
            </div>
        </div>
        <Link className="btn btn-primary my-2" to={"/"}>Back to homepage</Link>
        </div>
      </div>
    </div>
  );
}
