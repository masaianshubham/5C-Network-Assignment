import axios from "axios"
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

export const getRepoRequest = () => ({
    type: GET_REPO_REQUEST
})

export const getRepoFailure = () => ({
    type: GET_REPO_FAILURE
})

export const getRepoSuccess = (payload) => ({
    type: GET_REPO_SUCCESS,
    payload
})

export const getRepo = (payload) => (dispatch) => {
    dispatch(getRepoRequest())
    axios.get(`https://api.github.com/users/${payload}/repos`)
    .then(res => dispatch(getRepoSuccess(res.data)))
    .catch(err => dispatch(getRepoFailure(err)))
}

export const getFollowerRequest = () => ({
    type: GET_FOLLOWER_REQUEST
})

export const getFollowerFailure = () => ({
    type: GET_FOLLOWER_FAILURE
})

export const getFollowerSuccess = (payload) => ({
    type: GET_FOLLOWER_SUCCESS,
    payload
})

export const getFollower = (payload) => (dispatch) => {
    console.log(payload)
    dispatch(getFollowerRequest())
    axios.get(`https://api.github.com/users/${payload}/followers`)
    .then(res => dispatch(getFollowerSuccess(res.data)))
    .catch(err => dispatch(getFollowerFailure(err)))
}

export const getFollowerRepoRequest = () => ({
    type: GET_FOLLOWER_REPO_REQUEST
})

export const getFollowerRepoFailure = () => ({
    type: GET_FOLLOWER_REPO_FAILURE
})

export const getFollowerRepoSuccess = (payload) => ({
    type: GET_FOLLOWER_REPO_SUCCESS,
    payload
})

export const getFollowerRepo = (payload) => (dispatch) => {
    dispatch(getFollowerRepoRequest())
    axios.get(`https://api.github.com/users/${payload}/repos`)
    .then(res => dispatch(getFollowerRepoSuccess(res.data)))
    .catch(err => dispatch(getFollowerRepoFailure(err)))
}