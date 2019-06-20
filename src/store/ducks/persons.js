export const Types = {
  GET_REQUEST: 'persons/CHANGE_PERSON',
};

const INITIAL_STATE = {
  data: {
    name: 'Alberto',
    job: 'Presidente',
    age: '46',
    foto: `${process.env.PUBLIC_URL}/images/avatar-alberto.png`,
  },
};

export default function persons(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CHANGE_PERSON:
      return { ...state, data: action.payload };
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
