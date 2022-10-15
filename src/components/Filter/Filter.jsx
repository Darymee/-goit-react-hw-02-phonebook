import { FilterInput } from './Filter.styled';

export const Filter = ({ onChange, value }) => {
  return (
    <label>
      <FilterInput
        onChange={onChange}
        name="filter"
        type="filter"
        value={value}
      ></FilterInput>
    </label>
  );
};
