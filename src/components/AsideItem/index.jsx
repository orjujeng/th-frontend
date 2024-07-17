import React, { Fragment } from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
export default function AsideItem(props) {
  const arrowRef = React.useRef();
  const asideSubItemRef = React.useRef();
  const colArrow = () => {
    if (arrowRef.current.style.rotate == '90deg') {
      arrowRef.current.style.rotate = '0deg'
      asideSubItemRef.current.style.display = 'none'
    } else {
      arrowRef.current.style.rotate = '90deg'
      asideSubItemRef.current.style.display = 'block'
    }
  }

  return (
    <Fragment>
      <div className="asideItems">
        <NavLink to={props.title} className={({isActive}) => { return isActive ? 'activate' : ''}}>
          <div className="asideItem" onClick={colArrow}>
            <span class="iconfont asideItemTitleIcon"><DashboardIcon /></span>
            <span className="asideTitle">
              {props.title}
            </span>
            <span class="iconfont asideItemTitleRowArrow" style={{ display: (props.context == null || props.context.length == 0) ? 'none' : 'display' }} ref={arrowRef}>&#xe63c;</span>
          </div>
        </NavLink>
        <div className="asideSubItem" ref={asideSubItemRef} style={{ display: 'none' }}>
          {props.context != null ? props.context.map((items) => {
            return <div className="asideSubItemTitle">{items}</div>;
          }) : null}
        </div>
      </div>
    </Fragment>
  )
}
