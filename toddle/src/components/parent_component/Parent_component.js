import React,{useState, useEffect, useRef} from "react";
import { Draggable } from "react-drag-reorder";
import { nanoid } from 'nanoid'
import Child_component from "../Child_component/Child_component";
import {MdAddCircleOutline} from "react-icons/md";
import { BiMove,BiRightArrowAlt,BiLeftArrowAlt } from 'react-icons/bi';
import {RiDeleteBin6Fill} from 'react-icons/ri';
import "./parent.css"

export default function Parent_component() {

  const dataset = 
  [{ïd:1,"data":"first", "level":0},
   {ïd:2,"data":"first-child","level":1},
   {ïd:3,"data":"seocnd-child","level":1},
   {ïd:4,"data":"firstchild2","level":2},
   {ïd:5,"data":"second","level":0},
   {ïd:6,"data":"second-child","level":1}
]

  const [standard, setStandard] = useState([]);
  const [show, setShow] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    // console.log(document.getElementById('childElements'))
     var clsElements = document.querySelectorAll("#topic");
     console.log("ce",clsElements);
     console.log(inputRef)
    // console.log("current",inputRef.current.childNodes)
    //const newlist = inputRef.current.childNodes
    // console.log(newlist)
    // console.log("hello",inputRef.current.children[0])
    //console.log(trial)
    //console.log(inputRef.current.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[0].defaultValue)

  }, [show])


  const TextComponent = () =>{
    return (
    <>
    <Draggable>
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
            <input type="text" id="topic-t" className="Topic" name="Topic" placeholder="Text" size="2500"></input>
        </div>
        </div>
        <hr></hr>
        </Draggable>
    </>
    )
  }

  
  const onAddStandard = event => {
    setShow(show + 1)
    setStandard(standard.concat(<TextComponent key={standard.length} />));
  };

  const childClickFunction = (e) => {
    // e.preventDefault();
    console.log("Function Running")
    setShow(show + 1)
  }


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
            {dataset.map((data) => {
            return (
              <>
              <div className="child" key={data.id}>
              <div className='icons'>
                  <BiMove/>
                  <BiLeftArrowAlt/>
                  <BiRightArrowAlt/>
                  <RiDeleteBin6Fill/>
              </div>
              <div className={data.level === 0 ? 'box' : data.level === 1 ? 'box-child' : 'box-child2'}>
                  &nbsp;
              </div>
        
              <div className='Text'>
                  {data.data && <input type="text" id="topic"  className={data.level === 0 ? 'Topic' : data.level === 1 ? 'topic_child' : 'topic_subchild'} name="Topic" placeholder="Text" size="2500" defaultValue= {data.data}></input>}
                  {/* <input type="text" id="Topic" name="Topic" placeholder="Text" size="2500" defaultValue={"props.props.data"}></input> */}
              </div>
              </div>
              <hr></hr>
              </>
            )})}
          </Draggable>
          {standard}
        </div>
        <button className="add-button" onClick={onAddStandard}><a>
          <MdAddCircleOutline style={{"fontSize":"1.3rem","paddingRight":"2%"}}/>
          Add a Standard</a>
        </button>
    </div>
  )
}
