import React from "react";
import {
  EditorState,
  RichUtils
} from "draft-js";
import Editor from "draft-js-plugins-editor";
import createHighlightPlugin from "./highlightPlugin";
import "./highlight.css";

const highlightPlugin = createHighlightPlugin();

class PageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };

    this.plugins = [highlightPlugin];
  }

  onChange = editorState => {
    this.setState({
      editorState
    });
  };

  handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(
      this.state.editorState,
      command
    );
    if (newState) {
      this.onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  onUnderlineClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
    );
  };

  onBoldClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  };

  onItalicClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
    );
  };

  onStrikeThroughClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "STRIKETHROUGH")
    );
  };

  onHighlight = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "HIGHLIGHT")
    );
  };


  render() {
    return (
      <div className="editorContainer">
        <button className="underline" onClick={this.onUnderlineClick}>
          U
        </button>
        <button className="bold" onClick={this.onBoldClick}>
          <b>B</b>
        </button>
        <button className="italic" onClick={this.onItalicClick}>
          <em>I</em>
        </button>
        <button className="strikethrough" onClick={this.onStrikeThroughClick}>
          abc
        </button>
        <button className="highlight" onClick={this.onHighlight}>
          <span style={{ background: "yellow", padding: "0.3em" }}>H</span>
        </button>
        <div className="editors">
          <Editor
            editorState={this.state.editorState}
         //   handleKeyCommand={this.handleKeyCommand}
            plugins={this.plugins}
            onChange={this.onChange}
          >
                    <p>At noon they sat down by the roadside, near a little brook, and Dorothy opened her basket and got out some bread.  She offered a piece to the Scarecrow, but he refused.</p>
                    <p>&ldquo;I am never hungry,&rdquo; he said, &ldquo;and it is a lucky thing I am not, for my mouth is only painted, and if I should cut a hole in it so I could eat, the straw I am stuffed with would come out, and that would spoil the shape of my head.&rdquo;</p>
                    <p>At noon they sat down by the roadside, near a little brook, and Dorothy opened her basket and got out some bread.  She offered a piece to the Scarecrow, but he refused.</p>
                    <p>&ldquo;I am never hungry,&rdquo; he said, &ldquo;and it is a lucky thing I am not, for my mouth is only painted, and if I should cut a hole in it so I could eat, the straw I am stuffed with would come out, and that would spoil the shape of my head.&rdquo;</p>
            </Editor>
            </div>
      </div>
    );
  }
}

export default PageContainer;
