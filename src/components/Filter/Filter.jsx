import { useSelector, useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { FilterInput, Label } from './Filter.styled';
import { getFilterValue } from '../../redux/contacts/contacts-selectors';
import { changeFilter } from '../../redux/contacts/contacts-slice';

function Filter() {
  const value = useSelector(getFilterValue);
  const dispatch = useDispatch();
  
  const onFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <Label>
        <FaSearch size='14'></FaSearch>Find contacts by name
        <FilterInput
          type='text'
          name='filter'
          title='Введите запрос для поиска'
          required
          onChange={onFilterChange}
          value={value}
          autoComplete='off'
        />
      </Label>
    </div>
  );
}

export default Filter;
