import React, {useState} from 'react'
import styles from '../Style/Home.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { getRepo } from '../../Redux/actions'
import { Card } from './Card'
import { useHistory } from 'react-router-dom'

export const Home = () => {
    const [userName , setUserName] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()
    const data = useSelector(state => state.data)
    

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(getRepo(userName))
    }

    const handleFollower = () => {
        history.push(`/follower/${data[0].owner.login}`)
    }
    return (
        <div>
            <div className={styles.searchBar}>
            <form onSubmit={handleSearch}>
                <input type="text" value={userName} onChange={(e)=> setUserName(e.target.value)}/><br />
                <button type="submit">Search</button>
            </form>
            
            </div>
            <div>
                {data.length>0 && 
                <div>
                    <h3>Name: {data[0].owner.login}</h3>
                    <button onClick={()=> handleFollower()}>Followers</button>
                </div>}
            </div>
            <div className={styles.cards}>
                {data && data.map(item => <Card  item={item}/>)}
            </div>
        </div>
    )
}
