import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const {id} = useParams()

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    const {
        target:{name, value},
    } = e;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`)
    setUser(result.data);
  }

  useEffect(() => {
    
    loadUser()
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                name
              </label>
              <input
                type={"text"}
                className="form-control"
                name="name"
                placeholder="name"
                onChange={(e) => onInputChange(e)}
                value={name}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                username
              </label>
              <input
               type={"text"}
                className="form-control"
                placeholder="username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
            <button type="submit" className="btn btn-danger mx-2">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
