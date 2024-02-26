import { ReactNode } from 'react'
import  useTheme  from '../provider/useTheme';
import { THEME_WEBDOTG, THEME_UNICORNG, THEME_DOTG } from '../provider/themeProvider'
import style from './layout.module.scss'
import Header from '../header/header'
import Footer from '../footer/footer'

type typeProps = {
  children: ReactNode
}

export default function Layout({ children }: typeProps) {
  
  const isTheme = useTheme()

  console.log('LAYOUT useTHEME() = isTHEME : ', isTheme.theme)
  
  return (
    <div className={style.layout}>

      <ul className={style.color_theme_btn_list}>
        <li className={style.color_theme_btn}>
          <button
            onClick={() => isTheme.change(THEME_WEBDOTG)}>
            <svg width="25px" height="25px" fill='rgba(0, 174, 181, 1.0)' id="G_logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 128 128" xmlSpace="preserve">
              <g>
                <path d="M10.4,38.9v53.5c0,7.4,3.7,11.3,10.6,11.3c9.4,0.1,18.6,0.1,28,0c6.7,0,10.5-4,10.5-11.1c0-6.3,0-21.2,0-21.2l-22.8,0.2
		                V60.4c0,0,21.3,0,29.3,0c3.3,0.1,3.8,0.5,3.7,3.7c0,9.8,0.1,19.5,0,29.3c0,12.1-8.5,20.9-20.1,21c-9.8,0.1-19.7,0.1-29.5,0
		                c-11.7,0-20.1-8.9-20.1-21.2V38.5c0.1-12,8.3-21,19.8-21.2C30,17,40.3,17,50.5,17.2c10.8,0.2,19.1,9.1,19.4,20.4c0,2,0,7.9,0,7.9
		                H59.7c0,0,0-3.6-0.1-6.5C59.5,31.8,55.7,28,48.8,28h-28C14.3,28,10.4,31.9,10.4,38.9z"/>
                <path d="M128,128h-11L69.9,0h10.8L128,128z" />
              </g>
            </svg>
          </button>
        </li>
        <li className={style.color_theme_btn}>
          <button onClick={() => isTheme.change(THEME_DOTG)}>
            <svg id="dotgIcon" width="35px" height="35px" enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" >
              <path fill='rgba(217, 26, 6, 1.0)'
                d="M283.195,411.084c-1.718,0-3.454-0.477-4.959-1.469c-3.242-2.127-4.783-6.061-3.828-9.816l26.822-106.666  L41.717,334.498c-3.135,0.496-6.191-0.637-8.238-2.957c-2.055-2.34-2.773-5.563-1.887-8.557L79.318,161.11  c1.312-4.465,5.785-7.192,10.373-6.342l233.491,43.758l24.783-90.927c0.904-3.304,3.579-5.819,6.945-6.501  c3.349-0.683,6.819,0.585,8.929,3.269L478.832,250.38c1.506,1.905,2.18,4.322,1.879,6.724c-0.284,2.4-1.524,4.584-3.438,6.072  L288.759,409.189C287.13,410.447,285.162,411.084,283.195,411.084z M313.385,272.938c2.533,0,4.959,1.063,6.695,2.957  c2.056,2.232,2.852,5.369,2.109,8.326l-23.794,94.551l160.542-124.344l-98.199-124.684l-22.251,81.617  c-1.24,4.57-5.757,7.414-10.416,6.528L94.404,174.104L53.054,314.32l258.913-41.26C312.444,272.971,312.925,272.938,313.385,272.938  z" />
            </svg>
          </button>
        </li>
        <li className={style.color_theme_btn}>
          <button onClick={() => isTheme.change(THEME_UNICORNG)}>
            <svg width="35px" height="35px" version="1.1" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" >
              <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                <g fill="rgb(201, 177, 255)"
                  id="Fill-181"><path d="M56.884,34.757 C55.873,30.714 54.948,28.669 54.909,28.584 L54.768,28.359 C53.07,26.325 46.738,21.575 43.952,19.558 C47.69,14.421 53.006,7.11 55.212,4.075 C55.515,3.658 55.452,3.08 55.066,2.738 C54.681,2.396 54.1,2.403 53.722,2.755 L39.584,15.911 C38.734,15.227 38.436,14.06 38.863,13.053 L42.131,5.365 C43.021,3.39 42.407,2.071 41.963,1.46 C41.229,0.454 39.947,-0.074 38.606,0.072 C37.195,0.23 36.007,1.128 35.427,2.475 L33.092,7.898 C31.982,4.49 28.779,2.018 25.006,2.018 C20.315,2.018 16.499,5.834 16.499,10.524 C16.499,12.609 17.256,14.519 18.507,16 L14,16 C10.882,16 9.25,18.012 9.25,20 C9.25,21.988 10.882,24 14,24 L24,24 C24.4,24 24.819,24.335 25.304,24.723 L25.438,24.827 L28.075,26.62 L22.762,32.257 C22.365,32.103 21.957,31.962 21.538,31.835 C21.21,30.011 20.096,28.846 19.096,27.812 C18.434,27.13 17.81,26.485 17.481,25.716 C17.335,25.374 17.011,25.141 16.641,25.112 C16.271,25.081 15.913,25.261 15.715,25.577 C14.207,27.978 14.112,30.351 14.207,31.634 C7.513,33.479 0.663,39.94 0.311,40.275 C-0.089,40.655 -0.106,41.288 0.275,41.688 C0.655,42.089 1.289,42.106 1.688,41.725 C1.787,41.631 11.676,32.336 18.414,33.199 C25.172,34.068 29.255,39.076 32.237,42.732 C33.081,43.768 33.879,44.746 34.629,45.496 C35.202,46.069 35.846,46.96 35.66,47.949 C35.501,48.799 34.749,49.577 33.597,50.085 C32.33,50.643 32.07,50.395 31.099,49.469 C30.318,48.726 29.251,47.709 27.322,47.053 C25.415,46.405 19.635,46.013 18.366,45.933 C17.579,45.567 15.757,44.514 15.264,43.279 C15.089,42.842 15.097,42.432 15.289,41.989 C15.51,41.482 15.277,40.893 14.771,40.673 C14.261,40.453 13.674,40.686 13.455,41.192 C13.053,42.118 13.036,43.096 13.406,44.021 C14.076,45.696 15.843,46.86 16.911,47.437 L11.81,57.613 C11.563,58.107 11.763,58.708 12.256,58.956 C12.399,59.028 12.553,59.062 12.703,59.062 C13.069,59.062 13.423,58.859 13.598,58.51 L18.88,47.971 C21.156,48.13 25.359,48.498 26.678,48.947 C28.19,49.461 29.002,50.234 29.719,50.917 C30.477,51.639 31.251,52.377 32.504,52.377 C33.038,52.377 33.66,52.243 34.403,51.915 C36.169,51.137 37.344,49.826 37.626,48.317 C37.896,46.877 37.334,45.373 36.043,44.082 C35.364,43.404 34.634,42.507 33.787,41.469 C32.81,40.271 31.721,38.937 30.466,37.636 L35.72,31.818 L37.139,32.783 C37.739,33.254 37.81,33.414 39.03,37.035 C39.342,37.961 39.725,39.097 40.207,40.5 C40.849,42.368 42.365,43.188 43.862,43.188 C44.29,43.188 44.716,43.121 45.12,42.993 C46.981,42.4 48.488,40.525 47.771,38.087 L45.59,30.677 C45.549,30.536 45.53,30.427 45.524,30.346 C45.789,30.514 46.034,30.666 46.26,30.806 C47.697,31.698 48.086,31.963 48.385,32.733 L50.021,37.003 C51.018,39.571 53.255,40.415 54.852,39.908 C56.382,39.421 57.604,37.64 56.884,34.757 L56.884,34.757 Z M38.551,23.579 C38.484,23.59 38.404,23.598 38.312,23.598 C37.781,23.598 37.226,23.327 36.704,22.815 C36.047,22.17 36.563,21.481 36.778,21.252 L47.511,11.266 C43.473,16.819 39.438,22.364 38.551,23.579 L38.551,23.579 Z M25.006,4.018 C28.593,4.018 31.512,6.937 31.512,10.524 C31.512,14.111 28.593,17.03 25.006,17.03 C21.418,17.03 18.499,14.111 18.499,10.524 C18.499,6.937 21.418,4.018 25.006,4.018 L25.006,4.018 Z M16.193,31.234 C16.164,30.491 16.224,29.375 16.676,28.137 C16.989,28.513 17.326,28.861 17.659,29.204 C18.333,29.9 18.938,30.535 19.298,31.322 C19.088,31.287 18.885,31.243 18.67,31.216 C17.867,31.112 17.037,31.13 16.193,31.234 L16.193,31.234 Z M29.029,36.242 C27.754,35.084 26.32,34.007 24.681,33.136 L29.75,27.759 L34.05,30.683 L29.029,36.242 L29.029,36.242 Z M54.245,38.001 C53.516,38.233 52.44,37.708 51.887,36.284 L50.251,32.013 C49.696,30.584 48.8,30.028 47.315,29.106 C47.062,28.95 46.785,28.778 46.481,28.584 C45.769,28.131 44.905,28.143 44.28,28.612 C43.94,28.868 43.199,29.636 43.672,31.242 L45.854,38.652 C46.279,40.101 45.211,40.864 44.513,41.087 C43.685,41.351 42.558,41.186 42.098,39.85 C41.617,38.451 41.236,37.319 40.926,36.396 C39.634,32.561 39.468,32.067 38.317,31.169 L26.554,23.163 C25.907,22.645 25.102,22 24,22 L14,22 C12.101,22 11.25,20.996 11.25,20 C11.25,19.004 12.101,18 14,18 L20.952,18 C22.158,18.656 23.539,19.03 25.006,19.03 C28.992,19.03 32.336,16.27 33.254,12.565 L33.274,12.535 L37.265,3.266 C37.67,2.323 38.419,2.105 38.829,2.06 C39.444,1.988 40.039,2.217 40.346,2.638 C40.765,3.212 40.556,3.991 40.299,4.563 L37.023,12.271 C36.283,14.014 36.745,16.011 38.12,17.273 L35.385,19.818 C35.28,19.924 34.367,20.888 34.378,22.189 C34.385,22.945 34.704,23.655 35.303,24.242 C36.443,25.363 37.569,25.598 38.312,25.598 C39.021,25.598 39.5,25.386 39.589,25.344 C39.725,25.278 39.845,25.183 39.938,25.065 C39.982,25.011 41.12,23.449 42.776,21.175 C46.334,23.745 51.661,27.855 53.143,29.537 C53.348,30.02 54.118,31.938 54.944,35.243 C55.301,36.67 55.026,37.753 54.245,38.001 L54.245,38.001 Z" />
                </g>
              </g>
            </svg>
          </button>
        </li>
      </ul> 

      <Header />
      {children}
      <Footer />

    </div>
  )
}
