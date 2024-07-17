// src/pages/Dashboard.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Dashboard = () => {
  const [searchId, setSearchId] = useState('');
  const [employees, setEmployees] = useState([]);
  const [pastEmployees, setPastEmployees] = useState([]);

  const handleSearch = (e) => {
    setSearchId(e.target.value);
  };

  return (
    <Container>
      <Navbar>
        <Logo>Logo</Logo>
        <NavLinks>
          <a href="/">Link1</a>
          <a href="/">Link2</a>
          <a href="/">Link3</a>
        </NavLinks>
      </Navbar>
      <HeroSection />
      <SearchSection>
        <input type="text" placeholder="Search by ID" value={searchId} onChange={handleSearch} />
      </SearchSection>
      <Tables>
        <TableSection>
          <h2>Current Employees</h2>
          <Table>
            {/* Render current employees here */}
          </Table>
          <button>Add Employee</button>
        </TableSection>
        <TableSection>
          <h2>Past Employees</h2>
          <Table>
            {/* Render past employees here */}
          </Table>
        </TableSection>
      </Tables>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${props => props.theme.colors.mediumBlue};
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const HeroSection = styled.div`
  height: 300px;
  background-image: url('your-background-image.jpg');
  background-size: cover;
  background-position: center;
`;

const SearchSection = styled.div`
  padding: 1rem;
  background-color: ${props => props.theme.colors.lightBlue};
`;

const Tables = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const TableSection = styled.div`
  flex: 1;
  margin: 0 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid ${props => props.theme.colors.mediumBlue};
    padding: 0.5rem;
  }
`;

export default Dashboard;






git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Asiphile1/employee-app.git
git push -u origin main