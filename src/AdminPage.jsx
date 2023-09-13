import React from "react";
import Layout from "./Layout.jsx";
import "./style.css";
import Home, {mockEmployees} from "./Home.jsx";

const AdminPage = () => {
  return (
    <Layout>
      <h1>Generation Thailand</h1>
      <h1>Home - Admin Sector</h1>
      <button><a href={"/user"}>User</a></button>
      <button><a href={"/admin"}>Admin</a></button>
      <h2>Create User Here</h2>
      <CreateUser />
      <TableDisplay data={mockEmployees} />
    </Layout>
  );
};

const TableDisplay = ({data}) => {
  return (
    <div className="container">
      <table>
        <tr>
          <th>Name</th>
          <th>Lastname</th>
          <th>Position</th>
          <th>Action</th>
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
          <td>
            <button>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

const CreateUser = () => {
  return (
    <div className="container">

      <form>
        <input type="text" id="name" name="name" placeholder="Name" />
        <input type="text" id="lastname" name="lastname" placeholder="Last Name" />
        <input type="text" id="position" name="position" placeholder="Position" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AdminPage;
