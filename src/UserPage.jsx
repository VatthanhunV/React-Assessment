import React, {useState, useEffect} from 'react';
import Layout from './Layout.jsx'
import './style.css'
import Home, {mockEmployees} from "./Home.jsx";
import axios from 'axios'

const UserPage = () => {
    return (
        <Layout>
            <h1>Generation Thailand</h1>
            <h1>Home - User Sector</h1>
            <button><a href={"/user"}>User</a></button>
            <button><a href={"/admin"}>Admin</a></button>
            <TableDisplay />
        </Layout>
    )
}

const TableDisplay = () => {
  const [members, setMembers] = useState([])
  const [reload, setReload] = useState(false)
  
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://jsd5-mock-backend.onrender.com/members`)
      if (response.status === 200 && response.data) {
        console.log(response.data)
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
          </tr>
          <TableBody data={members} />
        </table>
      </div>
    );
  };
  const TableBody = (data) => {
    return (
      <tbody>
        {data.data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.lastname}</td>
            <td>{item.position}</td>
          </tr>
        ))}
      </tbody>
    );
  }
export default UserPage;