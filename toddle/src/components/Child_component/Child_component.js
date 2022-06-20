import React,{useState} from 'react'
import "./child.css";
import { BiMove,BiRightArrowAlt,BiLeftArrowAlt } from 'react-icons/bi';
import {RiDeleteBin6Fill} from 'react-icons/ri';
import {data} from "../../data";

export default function Child_component(props) {
    const [children, setChildren] = useState([]);
    const [child,isChild] = useState(true);
    console.log(props.props.data)
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
                        {props.props && <input type="text" id="Topic" name="Topic" placeholder="Text" size="2500" defaultValue= {props.props.data}></input>}
                        {/* <input type="text" id="Topic" name="Topic" placeholder="Text" size="2500" defaultValue={"props.props.data"}></input> */}
                    </div>
                    </div>
                    <hr></hr>
    </div>
  )
}
