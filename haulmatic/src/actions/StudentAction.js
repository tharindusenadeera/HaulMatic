//list students
export const getStudents = () => {
    return dispatch =>
        axios
            .get(process.env.REACT_APP_API_URL + "students", {
                headers: {
                    Authorization: localStorage.access_token
                }
            })
            .then(response => {
                dispatch({
                    type: GET_STUDENTS,
                    payload: response.data.make
                });
            });
}