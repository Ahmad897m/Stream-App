import React, { useState } from 'react'
import './trending.css'
import { trending } from '../../dummyData'
import Home from '../Homes/Home'

const Trending = () => {
    const [items, setItems] = useState(trending)
return (
    <>
        <section className="trending">
            <Home items={items} />
        </section>
    </>
)
}

export default Trending
