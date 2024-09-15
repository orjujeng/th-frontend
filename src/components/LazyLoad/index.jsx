import React, { Fragment } from 'react'
import './index.scss'
import CircularProgress from '@mui/material/CircularProgress';
export default function LazyLoad() {
  return (
    <Fragment>
      <div className="lazyLoadBox">
        <CircularProgress />
      </div>
    </Fragment>
  )
}
