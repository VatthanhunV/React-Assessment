import React, {useState} from 'react';
import Layout from './Layout';
import './style.css'


export const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {
  return (
    <Layout>
        <div className='container'>
          <h1>Generation Thailand</h1>
          <h1>React - Assessment</h1>
          <button><a href={'/user'}>User</a></button>
          <button><a href={'/admin'}>Admin</a></button>
        </div>
    </Layout>
  )
}

export default Home
