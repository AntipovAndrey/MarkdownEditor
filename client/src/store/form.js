export default {
  state: {
    titleText: '',
    contentText: '',
  },
  mutations: {
    UPDATE_TEXT_INPUT: (state, text) => {
      state.contentText = text;
    },
  },
};
