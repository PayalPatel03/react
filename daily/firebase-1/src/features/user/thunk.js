import { createAsyncThunk } from "@reduxjs/toolkit";

import { push, ref, set } from "firebase/database";
import { db } from "../../../firebase";

export const createUser = createAsyncThunk("create/user",async (user,{rejectWithValue})=>{
    try {
        const userRef = ref(db,'users/');
        const data = push(userRef);
        await set(data,user)
        return {...user, id : data.key}
    } catch (error) {
        return rejectWithValue(error)
    }
})