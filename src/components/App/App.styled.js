import styled from 'styled-components';

export const PhonebookWrap = styled.div`
  padding: 60px 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactWrap = styled.div`
  width: 500px;
  padding: 100px;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  font-family: monospace;
  margin-bottom: 15px;
  & > svg {
    margin-left: 15px;
  }
`;

export const ContactsTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin-bottom: 15px;
  font-family: monospace;
`;
