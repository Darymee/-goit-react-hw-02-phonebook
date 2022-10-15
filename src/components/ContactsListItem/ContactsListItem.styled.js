import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Name = styled.p`
  font-size: 20px;
  font-family: monospace;
  font-weight: 600;
  /* margin-right: 10px; */
  display: flex;
  align-items: center;
  & > svg {
    margin-right: 8px;
  }
`;

export const Number = styled.p`
  font-size: 20px;
  font-family: monospace;
  font-weight: 600;
  /* margin-right: 10px; */
`;

export const ButtonDelete = styled.button`
  cursor: pointer;
  display: block;
  font-size: 15px;
  font-family: monospace;
  width: 100px;
  height: 30px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #9173ec;
  border: 1px solid #571dac;
  color: #571dac;
  text-shadow: rgb(254 252 252 / 50%) 0px 1px 0px;
  font-weight: bolder;
  -moz-box-shadow: inset 0px 0px 1px rgba(124, 87, 191, 1);
  -webkit-box-shadow: inset 0px 0px 1px rgb(124 87 191);
  box-shadow: inset 0px 0px 1px rgb(124 87 191);
  background-image: -o-linear-gradient(
    90deg,
    rgb(137, 115, 232) 0%,
    rgb(188, 173, 242) 100%
  );
  background-image: -moz-linear-gradient(
    90deg,
    rgb(137, 115, 232) 0%,
    rgb(188, 173, 242) 100%
  );
  transition: border 300ms cubic-bezier(0.19, 1, 0.22, 1),
    background-color 300ms cubic-bezier(0.19, 1, 0.22, 1),
    bachground-image 300ms cubic-bezier(0.19, 1, 0.22, 1);
  &:hover,
  &:focus {
    background-color: #a88fef;
    border: 1px solid #571dac;
    background-image: -o-linear-gradient(
      90deg,
      rgb(154, 135, 235) 0%,
      rgb(199, 188, 242) 100%
    );
    background-image: -moz-linear-gradient(
      90deg,
      rgb(154, 135, 235) 0%,
      rgb(199, 188, 242) 100%
    );
  }
`;
