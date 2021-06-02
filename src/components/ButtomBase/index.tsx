import React from 'react'
import { Button as ButtonAntd ,ButtonProps } from 'antd'

interface Props extends ButtonProps {}

export const ButtomBase = (props: Props) => {
  return <ButtonAntd {...props} className={`bg-blue-500 text-white capitalize rounded-3xl w-28 ${props?.className}`}>{props.children}</ButtonAntd>
}
