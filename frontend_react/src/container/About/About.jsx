import { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import './About.scss';
import {urlFor, client} from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(()=>{
    const query = '*[_type == "abouts"] | order(_createdAt asc)'

    client.fetch(query)
    .then((data)=> setAbouts(data));
  },[])

  return (
    <>
      <h2 className='head-text'>I know that <span>good Apps</span><br/>means <span>good Business</span></h2>
       <div className='app__profiles'>
       {
        abouts.map((about, idx)=>(
          <motion.div
            whileInView={{opacity:1}}
            whileHover={{scale:1.1}}
            transition={{duration:[0.5], type:'tween'}}
            key={about.title + idx}
            className='app__profile-item'
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{marginTop: 20}}>{about?.title}</h2>
            <p className='p-text' style={{marginTop:10}} >{about?.description}</p>
          </motion.div>
        ))
       }
         </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about',
   "app__whitebg"
  );