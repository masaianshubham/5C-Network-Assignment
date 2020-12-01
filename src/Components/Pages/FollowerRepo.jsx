import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Card } from './Card'
import styles from '../Style/Home.module.css'
import { useParams, Link } from 'react-router-dom'
import { getFollowerRepo } from '../../Redux/actions'

export const FollowerRepo = () => {
    const param = useParams()
    const dispatch = useDispatch()
    const data = useSelector(state => state.followerRepo)
    useEffect(() => {
        dispatch(getFollowerRepo(param.name))
    }, [])
    return (
        <div>
            <Link to='/'>Go to Search page</Link>
            <div className={styles.cards}>
                {data && data.map(item => <Card  item={item}/>)}
            </div>
        </div>
    )
}
