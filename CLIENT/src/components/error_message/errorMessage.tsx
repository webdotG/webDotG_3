
type typeProps = {
  message?: string
}

export const ErrorMessage = ({ message }: typeProps) => {

  if (!message) {
    return null
  } else {
    return (
      <div>{message}</div>
    )
  }
}