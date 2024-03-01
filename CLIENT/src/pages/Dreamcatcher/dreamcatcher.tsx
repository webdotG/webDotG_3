import { ChangeEvent, FormEvent, useState } from 'react'
import style from './dreamcatcher.module.scss'

interface Dream {
  id: number;
  dream: string;
  description: string;
  date: string;
}

interface DreamItem {
  dream: string;
  description: string;
  date: string;
}

const DEAFAULT_DREAMS = [
  { id: 1, dream: 'some dream first', description: 'ololo', date: '01.12.2023' },
  { id: 2, dream: 'some dream second', description: 'alala', date: '01.12.2023' },
  {
    id: 3,
    dream: 'some dream third',
    description: 'Big long and uncircumcised Big long and uncircumcised Big long and uncircumcised Big long and uncircumcised Big long and uncircumcised Big long and uncircumcised Big long and uncircumcised Big long and uncircumcised ',
    date: '01.12.2023',
  },
]

const DEFAULT_ITEM_DREAM = {
  dream: '',
  description: '',
  date: ''
}


export default function Dreamcatcher() {

  const [dreams, setDreams] = useState<Dream[]>(DEAFAULT_DREAMS)
  const [dreamItem, setDreamItem] = useState<DreamItem>(DEFAULT_ITEM_DREAM)

  const onInputChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setDreamItem({ ...dreamItem, [e.target.name]: e.target.value });
  }

  const onDreamSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (dreamItem.dream && dreamItem.description && dreamItem.date) {
      const newDream: Dream = {
        id: dreams.length + 1,
        dream: dreamItem.dream,
        description: dreamItem.description,
        date: dreamItem.date,
      }
      setDreams([...dreams, newDream]);
      setDreamItem(DEFAULT_ITEM_DREAM);
    }
  }

  return (

      <div className={style['dreamcatcher']}>
        <h2 className={style['dreams-count']} >Записано снов: {dreams.length}</h2>

        <form className={style['dreams-form']}
          onSubmit={onDreamSubmit}>
          <label className={style['dreams-label']}>
            <span>сон</span>
            <textarea className={style['dreams-input']}
              rows={3}
              cols={50}
              id='dream'
              name='dream'
              value={dreamItem.dream}
              onChange={onInputChange}
            />
          </label>
          <label className={style['dreams-label']}>
            <span>что думаю</span>
            <textarea className={style['dreams-input']}
              rows={3}
              cols={50}
              id='description'
              name='description'
              value={dreamItem.description}
              onChange={onInputChange}
            />
          </label>
          <label className={style['dreams-label']}>
            <span>дата<b>меяц, день, год</b></span>
            <input className={style['dreams-input']}
              type='date'
              id='date'
              name='description'
              value={dreamItem.date}
              onChange={onInputChange}
            />
          </label>
          <button className={style['dreams-btn-submit']}
          >
            записать
          </button>
        </form>

        <ul className={style['dreams-list']}>
          {dreams.map((dream) => (
            <li className={style['dreams-item']}
              key={dream.id}>
              <span className={style['dreams-item-dream']}>{dream.dream}</span>
              <span className={style['dreams-item-description']}>{dream.description}</span>
              <span className={style['dreams-item-date']}>{dream.date}</span>
            </li>
          ))}
        </ul>

        </div>
  )
}
