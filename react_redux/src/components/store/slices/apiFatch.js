import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/*

for helpe goes to the link

https://medium.com/@ewelina14/redux-toolkit-with-asynchronous-web-requests-19adbb6cf63d

https://www.youtube.com/watch?v=cdFHgDPGm4I&t=91s

*/
export const fetchFakeData = createAsyncThunk("fetchFake/fetchFakeData", async (link) => {
    const respons = await fetch(link);
    const data = await respons.json();
    data.splice(10);
    //console.log(data.length);
    return data;
});


const fetchFakeDataSlice = createSlice({
    name: 'fetchData',
    initialState: {
        entities: [], //array of buses
        status: "loded", // loading state
    },

    extraReducers: {
        // handle async actions: pending, fulfilled, rejected (for errors)
        [fetchFakeData.pending](state) {
            state.status = "loading";
        },
        [fetchFakeData.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = "loded";
        },

        [fetchFakeData.rejected](state) {
            state.status = "rejected";
        },

    },
});

export default fetchFakeDataSlice.reducer;