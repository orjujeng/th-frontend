import React,{Fragment} from 'react'
import './index.scss'
import AsideItem from '../AsideItem'
export default function AsideList(props) {

  return (
    <Fragment>
      <div className="AsideListBox">
        <div className="AsideListTitleBox" style={{ display: props.title == null ? 'none' : 'block' }}>
            {props.title}
        </div>
        <div className="AsideListContextBox">
            {props.context.map((items)=>{
                return <AsideItem title={items.title} context ={items.context}/>
            })}
        </div>
      </div>
    </Fragment>
  )
}
