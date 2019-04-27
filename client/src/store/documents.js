import markdownApi from '../api/markdown'

export default {
  state: {
    currentDocument: null,
    availableDocuments: [],
    _loadedDocuments: {}
  },
  mutations: {
    SELECT_DOCUMENT: (state, currentDocument) => {
      state.currentDocument = currentDocument;
    },
    ADD_LOADED_DOCUMENT: (state, {id, document}) => {
      state._loadedDocuments[id] = document;
    },
    LOAD_DOCUMENTS_LIST: (state, documentPreviews) => {
      state.availableDocuments = documentPreviews;
    }
  },
  actions: {
    selectDocument: async ({state, commit}, documentId) => {
      let doc = state._loadedDocuments[documentId];
      if (!doc) {
        const {data, status} = await markdownApi.get(documentId);
        if (status < 300) {
          doc = data;
          commit('ADD_LOADED_DOCUMENT', {id: documentId, document: doc});
        }
      }
      commit('SELECT_DOCUMENT', doc)
    },
    loadDocumentsList: async ({commit}) => {
      const {status, data} = await markdownApi.get();
      if (status < 300) {
        commit('LOAD_DOCUMENTS_LIST', data);
      }
    }
  },
};
