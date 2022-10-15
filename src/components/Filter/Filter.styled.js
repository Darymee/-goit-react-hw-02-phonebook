import styled from 'styled-components';

export const FilterInput = styled.input`
  padding-left: 10px;
  display: block;

  width: 100%;
  height: 30px;
  border-radius: 5px;
  transition: border-color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover,
  &:focus {
    border-color: #9400d3;
  }
`;
