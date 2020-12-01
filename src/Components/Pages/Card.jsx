import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from '../Style/Card.module.css'

export const Card = ({item}) => {
    const history = useHistory()

    const handleDescription = () => {
        history.push(`/details/${item.id}`)
    }

    return (
        <div className={styles.card}>
            <img width="100px" src={item.owner.avatar_url} alt=""/>
            <div>
                <h5 onClick={()=>handleDescription()}>{item.name}</h5>
                <p>{item.description}</p>
            </div>
        </div>
    )
}
