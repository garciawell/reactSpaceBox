import React from 'react';
import data from 'services/dados';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as ActionsPersons } from 'store/ducks/persons';
import { scrollTop } from 'utils/tools';
import {
  BoxShadow, Figure, Box, Notification,
} from './styles';

export default function ListCard() {
  const dispatch = useDispatch();
  const infMerber = useSelector(state => state.persons.data);

  function handleMember(value) {
    scrollTop()
    dispatch(ActionsPersons.changePerson(value));
  }

  return (
    <Box>
      {data.map(item => (
        <BoxShadow
          key={item.id}
          active={item.id === infMerber.id}
          onClick={() => handleMember(item)}
        >
          <Notification>
            <Figure>
              <img src={item.avatar} alt={`${item.name} ${item.job}`} />
              <i>{item.id}</i>
            </Figure>
          </Notification>

          <ul>
            <li>
              <strong>{item.name}</strong>
            </li>
            <li>
              <span>{item.job}</span>
            </li>
          </ul>
        </BoxShadow>
      ))}
    </Box>
  );
}
