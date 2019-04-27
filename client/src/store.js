import Vue from 'vue'
import Vuex from 'vuex'

import markdownApi from './api/markdown'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentDocument: null,
    loadedDocuments: {},
    availableDocuments: []
  },
  mutations: {
    SELECT_DOCUMENT: (state, currentDocument) => {
      state.currentDocument = currentDocument;
    },
    ADD_LOADED_DOCUMENT: (state, {id, document}) => {
      state.loadedDocuments[id] = document;
    },
    LOAD_DOCUMENTS_LIST: (state, documentPreviews) => {
      state.availableDocuments = documentPreviews;
    }
  },
  actions: {
    selectDocument: async ({state, commit}, documentId) => {
      let doc = state.loadedDocuments[documentId];
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
  getters: {
    currentDocument: state => state.currentDocument,
    availableDocuments: state => state.availableDocuments
  }
});
