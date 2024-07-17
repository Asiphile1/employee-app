// src/pages/EmployeeForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({ name: '', id: '', number: '', email: '', position: '', startDate: '', image: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Container>
      <Navbar>
        <BackButton onClick={() => navigate('/dashboard')}>Back</BackButton>
      </Navbar>
      <Form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={employee.name} onChange={handleChange} />
        </label>
        <label>
          ID:
          <input type="text" name="id" value={employee.id} onChange={handleChange} />
        </label>
        <label>
          Number:
          <input type="text" name="number" value={employee.number} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={employee.email} onChange={handleChange} />
        </label>
        <label>
          Position:
          <input type="text" name="position" value={employee.position} onChange={handleChange} />
        </label>
        <label>
          Start Date:
          <input type="date" name="startDate" value={employee.startDate} onChange={handleChange} />
        </label>
        <label>
          Image:
          <input type="file" name="image" onChange={handleChange} />
        </label>
        <button type="submit">Update</button>
      </Form>
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

const BackButton = styled.button`
  background-color: ${props => props.theme.colors.orange};
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  label {
    margin-bottom: 1rem;
  }

  input {
    padding: 0.5rem;
    margin-top: 0.5rem;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: ${props => props.theme.colors.orange};
    border: none;
    cursor: pointer;
  }
`;

export default EmployeeForm;
