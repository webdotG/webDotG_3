import style from './paralaxZoom.module.scss'
import { useRef } from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'

export default function ParalaxZoom() {

  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5])
  const yTop = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])
  const xLeft = useTransform(scrollYProgress, [0, 1], ['1%', '-100%'])
  return (
    <section ref={ref} className={style['paralaxZoom-container']}>


      <div className={style['sticky']}>
        <div className={style['el']}>
          <motion.div style={{ x: xLeft }} className={style['stars']}></motion.div>
          <motion.div style={{ y: yTop }} className={style['planet']}></motion.div>
          <motion.div style={{ scale: scale }} className={style['image-container']}>

            <h2>Портфолио</h2>

          </motion.div>
        </div>
      </div>



    </section>
  )
}
