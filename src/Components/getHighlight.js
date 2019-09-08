import React, { Component } from "react";

import styles from "./testscreen.css"

export default class Highlight extends Component {
    constructor(props) {
        super(props);
        this.saveSelection = this.saveSelection.bind(this);
      }
      saveSelection = () => {
        //if some text is selected wrap it around a span and change the color and font weight
        if (window.getSelection()) {
          const selection = window.getSelection();
          var range = selection.getRangeAt(0);
          var newNode = document.createElement("span");
          newNode.setAttribute("style", "font-weight: bold;background-color: yellow");
          range.surroundContents(newNode); 
        }
      }
      render() {
        return (
        <div>
        <div  className="highlight" onMouseUp={this.saveSelection} onMouseDown={this.restoreSelection}>
        <p>
            An untrained person seated in the cockpit of a modern get liner would
            be completely bewildered by the array of gauges and controls before
            him - but he would not be surprised or bothered by this because he
            recognizes that flying an airplane is a complicated task that he is
            unable to perform.   However, when he struggles to operate a door,
            switches, water faucets, and other common everyday devices,
            he becomes quite upset.
        </p>
        </div>
        </div>
        )
      }
    
}