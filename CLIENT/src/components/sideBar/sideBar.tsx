  import { useState } from 'react'
  import { motion } from 'framer-motion'
  import Links from './Links/links'
  import ToggleButton from './ToggleButton/toggleButton'
  import style from './sideBar.module.scss'

  export default function SideBar() {

    const [open, setOpen] = useState(false)

    const variants = {
      open: {
        clipPath: 'circle(1200px at 50px 50px)',
        transition: {
          duration: 1.25,
        }
      },
      closed: {
        clipPath: 'circle(30px at 50px 50px)',
        transition: {
          delay: 0.25,
          type: 'spring',
          stiffness: 150,
          damping: 40,
          duration: 0.5,
        }
      }
    }

    const closeSidebar = () => {
      setOpen(false);
    };

    return (
      <motion.div
        className={style['sideBar']}
        animate={open ? 'open' : 'closed'}>
        <motion.div
          className={style['backGround']}
          variants={variants}
        >
          <Links closeSidebar={closeSidebar} />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
      </motion.div>
    )
  }
