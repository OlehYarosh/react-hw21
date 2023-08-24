import { createStore } from 'redux';
import dancing from '../assets/dancing.jpg';
import gimli from '../assets/gimli.jpg';
import aragorn from '../assets/aragorn.jpg';
import aragornWithSword from '../assets/swordAragorn.jpg';

const initialState = {
  posts: [
    {
        id: 1,
        author: 'Gimli',
        authorNickname: '@gimli',
        authorImage: gimli,
        date: '2023-07-23',
        text: 'Танцюючі орки',
        postImage: dancing,
        likes: 5934,
        comments: 334,
        shares: 21184,
    },
    {
        id: 2,
        author: 'Aragorn',
        authorNickname: '@aragorn',
        authorImage: aragorn,
        date: '2023-07-24',
        text: 'Я з мечем)',
        postImage: aragornWithSword,
        likes: 8161,
        comments: 471,
        shares: 19714,
    }
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
