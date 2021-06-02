import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { ConfigProvider, Layout } from 'antd'

export const PrivateRoute = ({ component: Children, title = '', ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={props => (
        <ConfigProvider>
          <div className="">
            <Layout>
              <Children {...props} />
            </Layout>
          </div>
        </ConfigProvider>
      )}
    />
  )
}
