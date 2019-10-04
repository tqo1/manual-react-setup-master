import React, { Component } from "react";

import styles from "./testscreen.css"

import Popover from "react-text-selection-popover";

export default class Highlight extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.refParagraph = React.createRef();
        //this.ToggleButton = this.ToggleButton.bind(this);
        this.saveSelection = this.saveSelection.bind(this);
      }
      ToggleButton() {
        this.setState(function(prevState) {
          return {isToggleOn: !prevState.isToggleOn};
        });
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
      }
      render() {
        return (
        <div>

        <p  className="highlight" ref={this.refParagraph} >
                    Mr Holohan, assistant secretary of the Eire
            Abu Society, had been walking up and down
            Dublin for nearly a month, with his hands and
            pockets full of dirty pieces of paper, arranging
            about the series of concerts. He had a game
            leg and for this his friends called him Hoppy
            Holohan. He walked up and down constantly,
            stood by the hour at street corners arguing
            the point and made notes; but in the end it
            was Mrs Kearney who arranged everything

                Miss Devlin had become Mrs Kearney out
        of spite. She had been educated in a
        high-class convent, where she had learned
        French and music. As she was naturally pale
        and unbending in manner she made few
        friends at school. When she came to the age
        of marriage she was sent out to many houses
        where her playing and ivory manners were
        much admired. She sat amid the chilly circle
        of her accomplishments, waiting for some
        suitor to brave it and oer her a brilliant life.
        But the young men whom she met were Kathleen, to a good convent, where she
        learned French and music, and aerward paid
        her fees at the Academy. Every year in the
        month of July Mrs Kearney found occasion to
        say to some friend:
        </p>
        <Popover selectionRef={this.refParagraph} >
              <div>Test icons</div>
              
        </Popover>
        </div>
        )
      }
    
}
