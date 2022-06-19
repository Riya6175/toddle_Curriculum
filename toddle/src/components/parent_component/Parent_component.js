import React,{useState} from "react";
import Child_component from "../Child_component/Child_component";
import {MdAddCircleOutline} from "react-icons/md";
import { BiMove,BiRightArrowAlt,BiLeftArrowAlt } from 'react-icons/bi';
import {RiDeleteBin6Fill} from 'react-icons/ri';
import "./parent.css"

export default function Parent_component() {

  const [standard, setStandard] = useState([]);
  const [show, setShow] = useState(true);

  const deleteItem = (index) => {
   setShow(false);
  }

  const TextComponent = () =>{
    return (
    <>
        <div className="child">
        <div className='icons'>
            <BiMove/>
            <BiLeftArrowAlt/>
            <BiRightArrowAlt/>
            <RiDeleteBin6Fill onClick={deleteItem}/>
        </div>
        <div className='box-child'>
            &nbsp;
        </div>
        <div className='Text-child'>
            <input type="text" id="Topic-child" name="Topic" placeholder="Text" size="2500"></input>
        </div>
        </div>
        <hr></hr>
    </>
    )
  }

  
  const onAddStandard = event => {
    setStandard(standard.concat(<TextComponent key={standard.length} />));
  };


  return (
    <div className="parent">
        <div className="header">
          MATHEMATICS
        </div>
        <hr></hr>
        <div className="subheader">
          <div className="actions">
            <div>
              Action
            </div>
            <div className="sub-action">
              Move, Indent,<br></br>
              Outdent,Delete
            </div>
          </div>
          <div className="standard">
            <div>
                Standard
            </div>
            <div className="sub-action">
              The text of the standard
            </div>
          </div>
        </div>
        <hr></hr>
        <Child_component/>
        {standard}
        <button className="add-button" onClick={onAddStandard}><a>
          <MdAddCircleOutline style={{"fontSize":"1.3rem","paddingRight":"2%"}}/>
          Add a Standard</a>
        </button>
        
    </div>
  )
}
