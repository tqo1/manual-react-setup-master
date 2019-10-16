import React, { Component } from "react";
import { Bar } from "./popoverui";
import Popover from "react-text-selection-popover";

export default class Highlight extends Component {
    constructor(props) {
        super(props);
        this.refParagraph = React.createRef();
        this.saveSelection = this.saveSelection.bind(this);
        this.saveHighlight = this.saveSelection.bind(this);
      }

      componentDidMount() {
         var ele = document.getElementById('highlight');
         var savedObject = JSON.parse(localStorage.getItem('savedObject'))
         if(savedObject && savedObject.length>0) {
            savedObject.forEach((val)=>{
              var pos = val.split('-')
              console.log(val)

              this.restoreSelection(ele, pos[0], pos[1])
            })
         }
      }
   
      restoreSelection = (containerEl, start, end) => {
        var savedSel = {start, end}
        var charIndex = 0, range = document.createRange();
        range.setStart(containerEl, 0);
        range.collapse(true);
        var nodeStack = [containerEl], node, foundStart = false, stop = false;
        while (!stop && (node = nodeStack.pop())) {
            if (node.nodeType == 3) {
                var nextCharIndex = charIndex + node.length;
                if (!foundStart && savedSel.start >= charIndex && savedSel.start <= nextCharIndex) {
                    range.setStart(node, savedSel.start - charIndex);
                    foundStart = true;
                }
                if (foundStart && savedSel.end >= charIndex && savedSel.end <= nextCharIndex) {
                    range.setEnd(node, savedSel.end - charIndex);
                    stop = true;
                }
                charIndex = nextCharIndex;
            } else {
                var i = node.childNodes.length;
                while (i--) {
                    nodeStack.push(node.childNodes[i]);
                }
            }
        }
        document.designMode = "on";

        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        document.execCommand("underline", false, null);
        document.designMode = "off";
    }

      saveSelection = () => {
        var range, sel;
        if (window.getSelection) {
            // Non-IE case
            sel = window.getSelection();
            if (sel.getRangeAt) {
                range = sel.getRangeAt(0);
            }
            console.log(range.startOffset, range.endOffset)
            var savedObject = JSON.parse(localStorage.getItem("savedObject"));
            if(!savedObject) {
              savedObject = [];
            }
            savedObject.push(range.startOffset+"-"+range.endOffset)
            localStorage.setItem("savedObject", JSON.stringify(savedObject))
             
            document.designMode = "on";
            
            if (range) {
                sel.removeAllRanges();
                sel.addRange(range);
            }
            document.execCommand("underline", false, null);
            document.designMode = "off";
        } else if (document.selection && document.selection.createRange &&
                document.selection.type != "None") {
            // IE case
            range = document.selection.createRange();
            range.execCommand("underline", false, null);

        }
      }

      saveHighlight = () => {
        const highlighted = [];
        
      }
      render() {
        return (
        <div>

        <p id='highlight' className="highlight" ref={this.refParagraph} >
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
        <Bar bg="yellow">
          <div onClick ={ this.saveSelection} >
          <p>
          Highlight
          </p>
          </div>
        </Bar>
        </Popover>

        </div>
        )
      }
    
}
