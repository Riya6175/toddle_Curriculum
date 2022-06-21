import React,{useState,useRef} from 'react'
import "./child.css";
import { BiMove,BiRightArrowAlt,BiLeftArrowAlt } from 'react-icons/bi';
import {RiDeleteBin6Fill} from 'react-icons/ri';
import {data} from "../../data";

export default function Child_component(props) {
  //const inputRef = useRef(null);

    // console.log(props.setShowProp)
    // console.log(props.props.level)

    const dragFunction = () => {
      props.setShowProp(Math.floor((Math.random() * 1000) + 1))
      
    }

  return (
    <> 
    <div onMouseUp={dragFunction} >
    {/* onMouseUp={props.props.useShow(Math.floor((Math.random() * 1000) + 1))} */}
      <div className="child">
      <div className='icons'>
          <BiMove/>
          <BiLeftArrowAlt/>
          <BiRightArrowAlt/>
          <RiDeleteBin6Fill/>
      </div>
      <div className={props.props.level === 0 ? 'box' : props.props.level === 1 ? 'box-child' : 'box-child2'}>
          &nbsp;
      </div>

      <div className='Text'>
          {props.props && <input type="text" id="topic"  className={props.props.level === 0 ? 'Topic' : props.props.level === 1 ? 'topic_child' : 'topic_subchild'} name="Topic" placeholder="Text" size="2500" defaultValue= {props.props.data}></input>}
          {/* <input type="text" id="Topic" name="Topic" placeholder="Text" size="2500" defaultValue={"props.props.data"}></input> */}
      </div>
      </div>
      <hr></hr>
    </div>
   </>
  )
}
