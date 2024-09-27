import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { homeData, recommended } from '../../dummyData'
import Upcoming from '../Upcoming/Upcoming'
import './style.css'

const SinglePage = () => {

    const {id} = useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        let item = homeData.find((item) => item.id === parseInt(id))
        if(item) {
            setItem(item)
        }
    }, [id])
    const [rec , setrec] = useState(recommended)

return (
    <>
        {
            item ? (
                <>
                <section className="singlePage">
                    <div className="singleHeading">
                        <h1>{item.name}</h1>
                        <span> | {item.time} | </span> <span> HD </span>
                    </div>
                    <div className="container">
                        <video src={item.video} controls></video>
                        <div className="para">
                            <h3>Data: {item.data}</h3>
                            <p>{item.desc}</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Doloribus non cupiditate voluptatibus nulla iste, commodi, harum consequuntur magni, 
                            ex eius eligendi neque quae veniam exercitationem hic temporibus itaque minima sunt nesciunt accusantium ea aperiam tenetur.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Doloribus non cupiditate voluptatibus nulla iste, commodi, harum consequuntur magni, 
                            ex eius eligendi neque quae veniam exercitationem hic temporibus itaque minima sunt nesciunt accusantium ea aperiam tenetur.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Doloribus non cupiditate voluptatibus nulla iste, commodi, harum consequuntur magni, 
                            ex eius eligendi neque quae veniam exercitationem hic temporibus itaque minima sunt nesciunt accusantium ea aperiam tenetur.</p>
                        </div>
                        <div className="social">
                            <h3>Share: </h3>
                            <img src="https://img.icons8.com/color/48/00000/facebook-new.png" alt="" />
                            <img src="https://img.icons8.com/fluency/48/00000/twitter-circled.png" alt="" />
                            <img src="https://img.icons8.com/fluency/48/00000/linkedin-circled.png" alt="" />
                        </div>
                    </div>
                </section>
                <Upcoming items={rec} title='Recommended Movies' />
                </>
            ) : null}
        </>
) 
}

export default SinglePage
