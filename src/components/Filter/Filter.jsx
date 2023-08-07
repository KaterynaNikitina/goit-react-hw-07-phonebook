import { Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';


export const Filter = () => {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
        dispatch(setFilter(target.value));
    }
    return (
        <Label>
            Find contacts by name
            <Input
            type="text" 
            value={filter}
            placeholder="enter name"            
            onChange={handleChange}>
            </Input>
        </Label>
    )
}


