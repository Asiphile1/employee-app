// src/pages/LoginPage.js
import React from 'react';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <Container>
      <LeftSection>
        <Form>
          <h2>Login</h2>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <button type="submit">Submit</button>
        </Form>
      </LeftSection>
      <RightSection>
        <video autoPlay loop muted>
          <source src="your-video-url.mp4" type="video/mp4" />
        </video>
      </RightSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftSection = styled.div`
  flex: 1;
  background-color: ${props => props.theme.colors.lightBlue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.darkBlue};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export default LoginPage;
