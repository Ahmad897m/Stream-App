import React, { useState } from 'react'
import Homes from '../components/Homes/Homes'
import {homeData, upcome , latest, recommended} from '../dummyData'
import Upcoming from '../components/Upcoming/Upcoming'
import Trending from '../components/trending/Trending'

function HomePages() {

    const [items , setitems] = useState(upcome)
    const [item , setitem] = useState(latest)
    const [rec , setrec] = useState(recommended)
    
return (
    <>
        <Homes />
        <Upcoming  items={items} title='Upcoming Movies' />
        <Upcoming  items={item} title='Latest Movies' />
        <Trending />
        <Upcoming  items={rec} title='Recommended Movies' />
    </>
)
}

export default HomePages
