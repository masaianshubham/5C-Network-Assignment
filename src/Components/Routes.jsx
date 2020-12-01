import React from 'react'
import { Route } from 'react-router-dom'
import { CardDetails } from './Pages/CardDetails'
import { Follower } from './Pages/Follower'
import { FollowerRepo } from './Pages/FollowerRepo'
import { Home } from './Pages/Home'

export const Routes = () => {
    return (
        <div>
            <Route path='/' exact render={()=> <Home />} />
            <Route path='/details/:id' render={()=><CardDetails />} />
            <Route path='/follower/:name' exact render={()=><Follower />} />
            <Route path='/follower/repo/:name' render={()=><FollowerRepo />} />
        </div>
    )
}
