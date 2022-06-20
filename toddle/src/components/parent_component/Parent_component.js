import React,{useState, useEffect, useRef} from "react";
import { Draggable } from "react-drag-reorder";
import Child_component from "../Child_component/Child_component";
import {MdAddCircleOutline} from "react-icons/md";
import { BiMove,BiRightArrowAlt,BiLeftArrowAlt } from 'react-icons/bi';
import {RiDeleteBin6Fill} from 'react-icons/ri';
import "./parent.css"

export default function Parent_component() {

  const [standard, setStandard] = useState([]);
  const [show, setShow] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    // console.log(document.getElementById('childElements'))
    // var clsElements = document.querySelectorAll("input");
    console.log(inputRef)
    // console.log("current",inputRef.current.childNodes)
    const newlist = inputRef.current.childNodes
    // console.log(newlist)
    // console.log("hello",inputRef.current.children[0])
    //console.log(trial)
    //console.log(inputRef.current.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[0].defaultValue)

  }, [])

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
            <input type="text" id="topic" className="Topic" name="Topic" placeholder="Text" size="2500"></input>
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
        <div id="childElements" className="dragFlex">
          <Draggable>
            <Child_component props={{"data":"first", "level":0}}/>
            <Child_component props={{"data":"first-child","level":1}}/>
            <Child_component props={{"data":"seocnd-child","level":1}}/>
            <Child_component props={{"data":"firstchild2","level":2}}/>
            <Child_component props={{"data":"second","level":0}}/>
            <Child_component props={{"data":"second-child","level":1}}/>
            <Child_component props={{"data":"third","level":0}}/>
          </Draggable>
        </div>
        
        {/* <div className="dragFlex"> */}

        {/* </div> */}
        {standard}
        <button className="add-button" onClick={onAddStandard}><a>
          <MdAddCircleOutline style={{"fontSize":"1.3rem","paddingRight":"2%"}}/>
          Add a Standard</a>
        </button>
        
    </div>
  )
}
