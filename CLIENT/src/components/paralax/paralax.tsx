import { useRef } from 'react'
import style from './paralax.module.scss'
import { motion, useScroll, useTransform } from 'framer-motion'


export default function Paralax({ type }: { type: string }) {

  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '400%'])
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const yTop = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])
  const xLeft = useTransform(scrollYProgress, [0, 1], ['1%', '-100%'])

  return (
    <section className={style['paralax-wrapper']}
      ref={ref}
    >
      <motion.h2 style={{ y: yText }}>
        {type === 'price' ? 'Цены' : 'Портфолио'}
      </motion.h2>
      <motion.div className={style['mountains']}></motion.div>

      <motion.div style={type === 'price' ? { y: yBg } : { y: yTop }} className={style['planet']}></motion.div>
      
      <motion.div style={type === 'price' ? { x: yBg } : { x: xLeft }} className={style['stars']}></motion.div>
    </section>
  )
}
