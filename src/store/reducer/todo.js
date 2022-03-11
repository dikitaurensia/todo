import {
  SET_TODO_DOCS,
  ADD_TODO_DOC,
  UPDATE_TODO_DOC,
  UPDATE_TODO_DOC_STATUS,
  REMOVE_TODO_DOC,
  SET_TODO_DOC,
  SET_OPEN_FORM_DIALOG,
} from "../../constants/action-types";
import updateObject from "../../helpers/update-object";

const initialState = {
  docs: [],
  doc: null,
  openFormDialog: false,
};

const reducer = (state = initialState, action) => {
  let updatedDocs = [];

  switch (action.type) {
    case SET_TODO_DOCS:
      return updateObject(state, { docs: action.todoDocs });
    case ADD_TODO_DOC:
      return updateObject(state, { docs: [action.todoDoc, ...state.docs] });
    case UPDATE_TODO_DOC:
      const { id, title, description } = action.todoDoc;

      updatedDocs = state.docs.map((doc) => {
        if (doc.id === id) {
          doc.title = title;
          doc.description = description;
        }

        return doc;
      });

      return updateObject(state, { docs: updatedDocs });
    case UPDATE_TODO_DOC_STATUS:
      updatedDocs = state.docs.map((doc) => {
        if (doc.id === action.id) {
          doc.status = action.status;
        }

        return doc;
      });

      return updateObject(state, { docs: updatedDocs });
    case REMOVE_TODO_DOC:
      updatedDocs = state.docs.filter((doc) => doc.id !== action.id);

      return updateObject(state, { docs: updatedDocs });
    case SET_TODO_DOC:
      return updateObject(state, { doc: action.todoDoc });
    case SET_OPEN_FORM_DIALOG:
      return updateObject(state, { openFormDialog: action.openFormDialog });
    default:
      return state;
  }
};

export default reducer;
