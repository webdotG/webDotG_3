import { Button } from 'antd'
import style from './style.module.scss'

type typeProps = {
  children: React.ReactNode,
  htmlType?: "button" | "submit" | "reset" | undefined,
  type?: "link" | "text" | "default" | "primary" | "dashed" | undefined,
  danger?: boolean | undefined,
  loading?: boolean | { delay?: number | undefined } | undefined
  shape?: "default" | "circle" | "round" | undefined,
  icon?: React.ReactNode,
  onClick?: () => void,
  customStyle: string
}

export const CustomButton = ({
  children,
  htmlType = 'button',
  type,
  danger,
  loading,
  shape,
  icon,
  onClick,
  customStyle
}: typeProps) => {

  console.log('STYLE', style)
  for( const st in style) {
      console.log("STyle : ", st)
  }


  return (
    <Button
      htmlType={htmlType}
      type={type}
      danger={danger}
      loading={loading}
      shape={shape}
      icon={icon}
      className={style[customStyle]} 
      onClick={onClick}
    >
      {children}
    </Button>
  )

}
// `${style[customStyle]} ${style[customStyle]}`