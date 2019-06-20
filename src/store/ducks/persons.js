export const Types = {
  CHANGE_PERSON: 'persons/CHANGE_PERSON',
};

const INITIAL_STATE = {
  data: {
    name: 'Alberto',
    job: 'Presidente',
    age: '46',
    id: 1,
    avatar: `${process.env.PUBLIC_URL}/images/avatar-alberto.png`,
  },
};

export default function persons(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CHANGE_PERSON:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  changePerson: data => ({
    type: Types.CHANGE_PERSON,
    payload: { data },
  }),
};
