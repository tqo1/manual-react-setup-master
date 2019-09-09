import React, { Component } from "react";

import styles from "./testscreen.css"

export default class Highlight extends Component {
    constructor(props) {
        super(props);
       
        this.saveSelection = this.saveSelection.bind(this);
        this.restoreSelection = this.restoreSelection.bind(this);
      }
      saveSelection = () => {
        var range, sel;
        if (window.getSelection) {
            // Non-IE case
            sel = window.getSelection();
            if (sel.getRangeAt) {
                range = sel.getRangeAt(0);
            }
            document.designMode = "on";
            if (range) {
                sel.removeAllRanges();
                sel.addRange(range);
            }
            document.execCommand("bold", false, null);
            document.designMode = "off";
        } else if (document.selection && document.selection.createRange &&
                document.selection.type != "None") {
            // IE case
            range = document.selection.createRange();
            range.execCommand("bold", false, null);

        }
        
      };

      restoreSelection = range => {
        if (range) {
          if (window.getSelection) {
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
          } else if (document.selection && range.select) {
            range.select();
          }
        }
      };

      render() {
        return (
        <div>
        <div  className="highlight" onMouseUp={this.saveSelection}>
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