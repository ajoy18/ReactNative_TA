import { createSlice } from "@reduxjs/toolkit";

const globalVariable = createSlice({
    name: 'globalVariable',
    initialState: {
        dataUser: {
            id_user: '',
            nama_user: '',
            nisn: '',
            token: ''
        },
        // dataGuru:{
        //     id_guru: '',
        // }
    },
    reducers:{
        storeUser: (state, action) => {
            state.dataUser.id_user = action.payload.id_user;
            state.dataUser.nama_user = action.payload.nama_user;
            state.dataUser.nisn = action.payload.nisn;
            state.dataUser.token = action.payload.token;
        },
        // storeGuru: 
    }
})

export const {storeUser} = globalVariable.actions
export default globalVariable.reducer;