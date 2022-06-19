import React,{useState} from 'react'
import "./child.css";
import { BiMove,BiRightArrowAlt,BiLeftArrowAlt } from 'react-icons/bi';
import {RiDeleteBin6Fill} from 'react-icons/ri';
import {data} from "../../data";

export default function Child_component() {
    const [children, setChildren] = useState([]);
    const [child,isChild] = useState(true);

  return (
    <div>
         {data.map((item) => (
                <>
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
                        <input type="text" id="Topic" name="Topic" placeholder="Text" size="2500" defaultValue={item.title}></input>
                    </div>
                    </div>
                    <hr></hr>

                    {item.subtitle? item.subtitle.map((subitems) => (
                        <>
                            <div className="child">
                            <div className='icons'>
                                <BiMove/>
                                <BiLeftArrowAlt/>
                                <BiRightArrowAlt/>
                                <RiDeleteBin6Fill/>
                            </div>
                            <div className='box-child'>
                                &nbsp;
                            </div>
                            <div className='Text-child'>
                                <input type="text" id="Topic-child" name="Topic" placeholder="Text" size="2500" defaultValue={subitems.title}></input>
                            </div>
                            </div>
                            <hr></hr>
                        </>
                    )): null}
                 </>
            ))}
    </div>
  )
}
