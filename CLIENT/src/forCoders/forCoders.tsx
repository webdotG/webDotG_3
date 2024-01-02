import style from './forCoders.module.scss'


export default function ForCoders() {
  return (
    <section className={style['zadrot-wrapper']}>
      <div className={style['zadrot']}>
        <button className={style['zadrot-open-btn']}>for coders</button>
        <div className={style['zadrot-list-block']}>
          <h3 className={style['zadrot-list-title-sub']}>Base:</h3>
          <ul className={style['zadrot-list-base']}>
            <li className={style['zadrot-list-item']}>Html</li>
            <li className={style['zadrot-list-item']}>Css</li>
            <li className={style['zadrot-list-item']}>Bem</li>
            <li className={style['zadrot-list-item']}>Crossbrowser</li>
            <li className={style['zadrot-list-item']}>Adalitive</li>
          </ul>
        </div>
        <div className={style['zadrot-list-block']}>
          <h3 className={style['zadrot-list-title-sub']}>Frontend</h3>
          <ul className={style['zadrot-list-front']}>
            <li className={style['zadrot-list-item']}>JavaScript, </li>
            <li className={style['zadrot-list-item']}>TypeScript, </li>
            <li className={style['zadrot-list-item']}>Vite, </li>
            <li className={style['zadrot-list-item']}>React, </li>
            <li className={style['zadrot-list-item']}>ReactNative, </li>
            <li className={style['zadrot-list-item']}>ReactRouterDom6</li>
            <li className={style['zadrot-list-item']}>ReduxToolKit<b>AsyncThunk</b></li>
            <li className={style['zadrot-list-item']}>Axios</li>
            <li className={style['zadrot-list-item']}>WebSocketIoClient</li>
            <li className={style['zadrot-list-item']}>Sass.modules</li>
          </ul>
        </div>
        <div className={style['zadrot-list-block']}>
          <h4 className={style['zadrot-list-title-sub']}>Backend</h4>
          <ul className={style['zadrot-list-back']}>
            <li className={style['zadrot-list-item']}>PostgresSQL</li>
            <li className={style['zadrot-list-item']}>MongoDB</li>
            <li className={style['zadrot-list-item']}>NodeJs</li>
            <li className={style['zadrot-list-item']}>ExpressJs</li>
            <li className={style['zadrot-list-item']}>SQL queries</li>
            <li className={style['zadrot-list-item']}>Axios queries</li>
            <li className={style['zadrot-list-item']}>JWT</li>
          </ul>
        </div>
      </div>
    </section >
  )
}
