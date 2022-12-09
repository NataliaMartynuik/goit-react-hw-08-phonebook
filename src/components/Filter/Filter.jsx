import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/Contacts/contactsSlice';
import { filterContacts } from 'redux/Contacts/contactsSlice';
import { FilterLabel, FilterInput } from './Filter.styled';


const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(filterContacts(event.currentTarget.value))
  }
  

    return (
         <FilterLabel> Find contacts by name
          <FilterInput type="text" value={filter} onChange={changeFilter}></FilterInput>
        </FilterLabel>
    )
}

export default Filter;
