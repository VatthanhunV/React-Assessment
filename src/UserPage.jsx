import React from 'react';
import Layout from './Layout.jsx'
import './style.css'
import Home, {mockEmployees} from "./Home.jsx";

const UserPage = () => {
    return (
        <Layout>
            <h1>Generation Thailand</h1>
            <h1>Home - User Sector</h1>
            <button><a href={"/user"}>User</a></button>
            <button><a href={"/admin"}>Admin</a></button>
            <TableDisplay data={mockEmployees} />
        </Layout>
    )
}

const TableDisplay = ({data}) => {
    return (
      <div className="container">
        <table>
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>Position</th>
          </tr>
          <TableBody data={data} />
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