import React from 'react'
import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'

interface Props {}

const Notfound = (props: Props) => {
  return (
    <div>
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <Link to="/">
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
      ,
    </div>
  )
}

export default Notfound
