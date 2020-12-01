import React, {useEffect} from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getFollower, getRepo } from '../../Redux/actions'
import styles from '../Style/Card.module.css'

export const Follower = () => {
    const param = useParams()
    const dispatch = useDispatch()
    const follower = useSelector(state => state.follower)
    const isLoading = useSelector(state => state.isLoading)
    const history  = useHistory()

    // getting follower
    useEffect(() => {
        if(follower.length === 0){
            dispatch(getFollower(param.name))
        }
    }, [])


    //route for follower repo page
    const handleRepo = (name) => {
        history.push(`/follower/repo/${name}`)
    }

    return (
        <>
            <Link to='/'>Go to Search Page</Link>
            <div className={styles.followerContainer}>
                {isLoading && <p>Loading ......</p>}
                { !isLoading && follower && follower.length===0 ? "No Follower Found" : follower.map(item=> 
                    <div className={styles.card} onClick={()=> handleRepo(item.login)}>
                    <img width="100px" src={item.avatar_url} alt=""/>
                    <div>
                        <h5>{item.login}</h5>
                        <p>{item.type}</p>
                    </div>
                </div>)}
            </div>
        </>
    )
}
