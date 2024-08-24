import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden:{
     x: '100vw'
  },
  visible:{
    x: 0, 
    transition: {type: 'spring', stiffness: 120}
  }, 
  exit: {
    x: '-100vw',
    transition: {ease: 'easeInOut'}
  }
}


const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container"
     variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
              whileHover={{scale: 1.3, originX: 0, color: '#f8e112'}}
              transition={{type: 'spring', stiffness: 300}}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
      <motion.button whileHover={{scale: 1.1, textShadow:"0px 0px 8px rgb(255, 255, 255)"}} boxShadow="2px 2px 8px rgb(0, 0, 0)"
           
           >
             Order
           </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;