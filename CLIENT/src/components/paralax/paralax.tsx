import { useRef } from 'react'
import style from './paralax.module.scss'
import { motion, useScroll, useTransform } from 'framer-motion' 


export default function Paralax() {

  const ref = useRef<HTMLDivElement>(null)

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const yText = useTransform(scrollYProgress, [0,1], ['0%', '400%'])
  const yBg = useTransform(scrollYProgress, [0,1], ['0%', '100%'])

  return (
    <div className={style['paralax-wrapper']}
      ref={ref}
    >
      <motion.h1 style={{y: yText}} >Цены</motion.h1>
      <motion.div className={style['mountains']}></motion.div>
      <motion.div style={{y: yBg}} className={style['planet']}></motion.div>
      <motion.div style={{x: yBg}} className={style['stars']}></motion.div>
      </div>
  )
}
