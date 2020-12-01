import { loadData, saveData } from "../Utils/localstorage"
import {
    GET_REPO_FAILURE,
    GET_REPO_REQUEST,
    GET_REPO_SUCCESS,
    GET_FOLLOWER_FAILURE,
    GET_FOLLOWER_REQUEST,
    GET_FOLLOWER_SUCCESS,
    GET_FOLLOWER_REPO_FAILURE,
    GET_FOLLOWER_REPO_REQUEST,
    GET_FOLLOWER_REPO_SUCCESS} from "./actionTypes"



const initState = {
    data: loadData("repo") ||  [],
    error : "",
    isLoading: false,
    follower: loadData("follower") || [],
    followerRepo: []
}

const reducer = (state = initState, action) => {
    switch(action.type){
        case GET_REPO_REQUEST:
            saveData("repo", [])
            return {
                ...state,
                data:[],
                error : "",
                isLoading: true
            }
        case GET_REPO_FAILURE:
            return {
                ...state,
                error : "something went wrong",
                isLoading: false
            }
        case GET_REPO_SUCCESS:
            saveData("repo", action.payload)
            return {
                ...state,
                data: action.payload,
                error : "",
                isLoading: false
            }
        
        case GET_FOLLOWER_REQUEST:
            saveData("follower", [])
            return {
                ...state,
                follower:[],
                error : "",
                isLoading: true
            }
        case GET_FOLLOWER_FAILURE:
            return {
                ...state,
                error : "something went wrong",
                isLoading: false
            }
        case GET_FOLLOWER_SUCCESS:
            saveData("follower", action.payload)
            return {
                ...state,
                follower: action.payload,
                error : "",
                isLoading: false
            }
            case GET_FOLLOWER_REPO_REQUEST:
                return {
                    ...state,
                    followerRepo :[],
                    error : "",
                    isLoading: true
                }
            case GET_FOLLOWER_REPO_FAILURE:
                return {
                    ...state,
                    error : "something went wrong",
                    isLoading: false
                }
            case GET_FOLLOWER_REPO_SUCCESS:
                return {
                    ...state,
                    followerRepo: action.payload,
                    error : "",
                    isLoading: false
                }
        
        default: 
            return state;
    }
}

export default reducer