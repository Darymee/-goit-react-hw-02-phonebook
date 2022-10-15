import styled from 'styled-components';

export const FormWrap = styled.div`
  border: 2px solid black;
  padding: 30px;
  background-color: white;
  box-shadow: 10px 10px 53px -22px rgba(0, 0, 0, 0.75);
  width: 230px;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWrap = styled.div`
  position: relative;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    margin-right: 10px;
    width: 28px;
    height: 28px;

    top: 50%;
    left: 7px;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-family: monospace;
  position: absolute;
  top: -17px;
  left: 50px;
  background-color: white;
  padding: 4px 4px;
  border-radius: 10px;
`;

export const Input = styled.input`
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

export const ButtonSubmit = styled.button`
  cursor: pointer;
  display: block;
  font-size: 15px;
  font-family: monospace;
  width: 120px;
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
