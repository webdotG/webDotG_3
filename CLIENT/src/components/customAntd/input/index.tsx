import { Form, Input } from 'antd'

type typeProps = {
  name: string,
  placeholder: string,
  type: string
}

export default function CustomInput({
  name,
  placeholder,
  type = 'text'
}: typeProps) {

  return (
    <Form.Item
      name={name}
      shouldUpdate={true}
      rules={[{required: true, message: 'обязательно заполнить'}]}
    >
      <Input
        placeholder={placeholder}
        type={type}
        size='large'
      />
    </Form.Item>
  )
}
