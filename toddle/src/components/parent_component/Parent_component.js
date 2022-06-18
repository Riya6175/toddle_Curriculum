import React from "react";
import Child_component from "../Child_component/Child_component";
import {MdAddCircleOutline} from "react-icons/md";
import "./parent.css"

export default function Parent_component() {
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
        <button className="add-button">
          <MdAddCircleOutline style={{"fontSize":"1.5rem","paddingRight":"2%"}}/>
          Add a Standard
        </button>
    </div>
  )
}
