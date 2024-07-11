import React, { Fragment, useState } from 'react'
import './index.scss'
import AsideList from '../AsideList'
export default function Aside() {
  const [asideContext, setAsideContext] = useState([
    {
      title: null, context: [
        { title: 'Dashboard', context: null },
        { title: 'Analytics', context: null },
        { title: 'Alternative', context: null },
        { title: 'Inventory Management', context: null }]
    },
    {
      title: 'PAGES', context: [
        { title: 'Customers', context: ['Customer List', 'View Customer', 'New Customer'] },
        { title: 'Products', context: ['Products List', 'View Products', 'New Products'] },
        { title: 'Orders', context: ['Order List', 'View Order'] },
        { title: 'Help Center', context: ['FAQ 1', 'FAQ 2'] },
        { title: 'Pricing', context: ['Pricing 1', 'Pricing 2'] },
        { title: 'User List', context: ['User List 1', 'User List 2', 'User List 3', 'User List 4'] },
        { title: 'Forms', context: ['Order Form', 'Invoice Form', 'Property Listing Form', 'Basic', 'Upload', 'Wizard'] },
        { title: 'Matx List', context: ['List'] },
        { title: 'Session/Auth', context: ['Sign in', 'Sign up', 'Forgot Password', 'Error'] },
        { title: 'Left Sidebar Car', context: null }
      ]
    }
  ])
  return (
    <Fragment>
      <div className="asideBox">
        <div className="logo">
          <span class="iconfont">&#xe76a;</span>
          <span className='asideTh'>Timesheet</span>
        </div>
        <div className="asideContext">
          {asideContext.map((item) => {
            return <AsideList title={item.title} context={item.context} />
          })}
        </div>
      </div>
    </Fragment>
  )
}
