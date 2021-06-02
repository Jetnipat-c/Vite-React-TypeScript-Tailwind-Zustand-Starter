import React from 'react'

import { ButtomBase } from '../../components/ButtomBase'
import { CountStore } from '../../store/count.store'

export const Home = () => {
  const { count, setIncrease, setDecrease } = CountStore()

  return (
    <div className="flex flex-col w-screen justify-items-center content-center items-center text-xl text-title-cl">
      Counter Page
      <div>{count}</div>
      <div className="flex">
        <ButtomBase type="primary" htmlType="submit" onClick={setIncrease}>
          +
        </ButtomBase>
        <ButtomBase type="primary" danger htmlType="submit" onClick={setDecrease}>
          -
        </ButtomBase>
      </div>
    </div>
  )
}
