import React, {useEffect, useState} from "react";
import Layout from "./Layout.jsx";
import "./style.css";
import Home from "./Home.jsx";
import axios from "axios";

const AdminPage = () => {

  const createData = async (name, lastname, position) => {
    const response = await axios.post(`https://jsd5-mock-backend.onrender.com/members`,
    {
      name: name,
      lastname: lastname,
      position: position
    })
    if (response.status === 200) {
      console.log(response.data)
      setReload(!reload)
    }
  }

  return (
    <Layout>
      <h1>Generation Thailand</h1>
      <h1>Home - Admin Sector</h1>
      <button><a href={"/user"}>User</a></button>
      <button><a href={"/admin"}>Admin</a></button>
      <h2>Create User Here</h2>
      <FormCreate submitHandler={createData}/>
      <TableDisplay />
    </Layout>
  );
};

const TableDisplay = () => {
  const [members, setMembers] = useState([])
  const [reload, setReload] = useState(false)
  
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://jsd5-mock-backend.onrender.com/members`)
      if (response.status === 200 && response.data) {
        setMembers([...response.data])
      }
    } 
    getData()
  }, [reload])


  
  return (
    <div className="container">
      <table>
        <tr>
          <th>Name</th>
          <th>Lastname</th>
          <th>Position</th>
          <th>Action</th>
        </tr>
        <TableBody data={members} />
      </table>
    </div>
  );
};
const TableBody = ({data}) => {
  const deleteUser = async (id) => {
    const response = await axios.delete(`https://jsd5-mock-backend.onrender.com/member/${id}`,{id: id})
    console.log(id)
    if (response.status === 200) {
      setReload(!reload)
    }
  }

  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.lastname}</td>
          <td>{item.position}</td>
          <td>
            <button onClick={() => deleteUser(item.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

const FormCreate = ({submitHandler}) => {
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [position, setPosition] = useState('')
  return (
    <div className="container">

      <form>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
        <input type="text" placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)} />
        <button onClick={() => submitHandler(name, lastname, position)} >Save</button>
        {console.log(name, lastname, position)}
      </form>
    </div>
  );
};

export default AdminPage;
