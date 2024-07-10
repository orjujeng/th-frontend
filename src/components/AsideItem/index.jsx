import React,{Fragment} from 'react'
import './index.scss'
export default function AsideItem(props) {
  React.useEffect(()=>{
    console.log((props.context==null || props.context.length== 0))
},[])
  return (
    <Fragment>
      <div className="asideItem">
        <div className="asideTitle">
          <span class="iconfont">&#xe76a;</span>
          {props.title}
          <span class="iconfont" style={{ display: (props.context==null || props.context.length== 0)? 'none':'display' }} >&#xe76a;</span>
        </div>
      </div>
    </Fragment>
  )
}
