import { GET_STUDENTS } from "../actions/StudentAction";

const initialState = {
    students: []
}


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_STUDENTS:
            return { ...state, students: action.payload };

        default:
            return state;

    }
}