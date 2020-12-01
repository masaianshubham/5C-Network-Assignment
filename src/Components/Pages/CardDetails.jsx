import React from 'react'
import {useSelector} from 'react-redux'
import { useParams,Link } from 'react-router-dom'
import styles from '../Style/CardDetails.module.css'

export const CardDetails = () => {
    const param = useParams()
    const data = useSelector(state => state.data)
    const target = data.find(item => item.id == param.id)
    return (
        <div>
            <Link to='/'>Go to Search Page</Link>
            {target && 
                <div className={styles.detail}>
                    <div>
                        <img src={target.owner.avatar_url} alt=""/>
                    </div>
                    <div>
                        <h5>{target.name} </h5>
                        <p>{target.description}</p>
                        <p>forks: {target.forks}</p>
                        <p>watcher: {target.watchers}</p>
                    </div>
                </div>
            }
        </div>
    )
}
