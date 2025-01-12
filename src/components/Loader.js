import { motion, useCycle } from 'framer-motion'
import React from 'react'


const loaderVariants = {
    animateOne:{
        x: [-20, 20], 
        y: [0, -30], 
        transition: {
            x: {
                yoyo: Infinity, 
                duration: 0.5
            }, 
            y: {
                yoyo: Infinity, 
                duration: 0.25, 
                ease: 'easeOut'
            }
        }
    }, 
    animateTwo:{
        x: [0, 0], 
        y: [0, -40], 
        transition: {
            x: {
                yoyo: Infinity, 
                duration: 0.25
            }, 
            y: {
                yoyo: Infinity, 
                duration: 0.25, 
                ease: 'easeOut'
            }
        }
    }
}
const Loader = () => {

    const [animation, cycleAnimation] = useCycle('animateOne', 'animateTwo')
  return (
    <>
        <motion.div className="loader"
        variants={loaderVariants}
        animate={animation}
        >

        </motion.div>
        <div onClick={() => cycleAnimation()}>Cycle Loader</div>
    </>
    
  )
}

export default Loader