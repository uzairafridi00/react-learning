import {configureStore} from "@reduxjs/toolkit"

import depositwithdrawReducer from "./depositwithdraw"

export default configureStore({
    reducer: {
        amount: depositwithdrawReducer 
    }
})