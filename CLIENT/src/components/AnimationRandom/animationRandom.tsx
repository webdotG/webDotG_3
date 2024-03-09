// import { useEffect } from 'react';
// import style from './animationRandom.module.scss'; // Подставьте ваш путь к стилям

// const RandomPulsatingDivs = () => {
//   useEffect(() => {
//     const pulsatingDivs = document.querySelectorAll(`.${style['random-pulsating-div']}`);

//     pulsatingDivs.forEach((div) => {
//       setRandomPosition(div as HTMLDivElement);
//       setRandomAnimation(div as HTMLDivElement);
//     });
//   }, []);

//   const setRandomPosition = (element: HTMLDivElement) => {
//     const screenWidth = window.innerWidth;
//     const screenHeight = window.innerHeight;

//     const randomLeft = Math.random() * screenWidth;
//     const randomTop = Math.random() * screenHeight;

//     element.style.left = `${randomLeft}px`;
//     element.style.top = `${randomTop}px`;
//   };

//   const setRandomAnimation = (element: HTMLDivElement) => {
//     const animationDuration = 25; // Длительность анимации в секундах
//     const animationDelay = Math.random() * animationDuration; // Задержка анимации в пределах длительности

//     element.style.animation = `moveInCircle ${animationDuration}s infinite linear`;
//     element.style.animationDelay = `-${animationDelay}s`; // Используем отрицательное значение для случайного запуска
//   };

//   return (
//     <div>
//       {/* Произвольные данные для каждого элемента */}
//       <div className={`${style['pulsating-div']} ${style['random-pulsating-div']}`} style={{ background: '#ff0000' }}></div>
//       <div className={`${style['pulsating-div2']} ${style['random-pulsating-div']}`} style={{ background: '#00ff00' }}></div>
//       <div className={`${style['pulsating-div3']} ${style['random-pulsating-div']}`} style={{ background: '#0000ff' }}></div>
//       <div className={`${style['pulsating-div4']} ${style['random-pulsating-div']}`} style={{ background: '#ffff00' }}></div>
//       <div className={`${style['pulsating-div5']} ${style['random-pulsating-div']}`} style={{ background: '#ff00ff' }}></div>
//       {/* Добавьте еще div'ы, если необходимо */}
//     </div>
//   );
// };

// export default RandomPulsatingDivs;
