export default {
  state: {
    titleText: '',
    contentText: '',
  },
  mutations: {
    UPDATE_TITLE_TEXT: (state, text) => {
      state.titleText = text;
    },
    UPDATE_CONTENT_TEXT: (state, text) => {
      state.contentText = text;
    },
  },
};
