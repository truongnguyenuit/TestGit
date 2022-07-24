export const blogReducer = (state, action) => {

  const { type, payload } = action

  switch (type) {
    case 'POSTS_LOADED_SUCCESS':
      return {
        ...state,
        posts: payload,
        postsLoading: false,
      }
    case 'POSTS_LOADED_SUCCESS':
      return {
        ...state,
        posts: payload,
        postsLoading: false,
      }
    case 'ADD_BLOG':
      return {
        ...state,
        posts: [...state.posts, payload]
      }
    default:
      return state

  }
}