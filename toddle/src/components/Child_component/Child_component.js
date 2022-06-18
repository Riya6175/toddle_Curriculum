import React from 'react'
import "./child.css";
import { BiMove,BiRightArrowAlt,BiLeftArrowAlt } from 'react-icons/bi';
import {RiDeleteBin6Fill} from 'react-icons/ri';

export default function Child_component() {
  return (
    <div>
        <div className="child">
            <div className='icons'>
            <BiMove/>
            <BiLeftArrowAlt/>
            <BiRightArrowAlt/>
            <RiDeleteBin6Fill/>
            </div>
            <div className='box'>
                &nbsp;
            </div>
            <div className='Text'>
                <input type="text" id="Topic" name="Topic" placeholder="Text"></input>
            </div>
        </div>
        <hr></hr>
    </div>
  )
}
