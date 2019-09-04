import React from "react";
import {
  // Editor,
  EditorState,
  RichUtils
} from "draft-js";
import Editor from "draft-js-plugins-editor";
import createHighlightPlugin from "./highlightplugin";
import "./highlight.css";

const highlightPlugin = createHighlightPlugin();

class PageContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editorState: false
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

  // onLinkClick = () => {
  // 	this.onChange(RichUtils.toggleLink(this.state.editorState));
  // };

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
          <section
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            plugins={this.plugins}
            onChange={this.onChange}
          >
            <p>
            An untrained person seated in the cockpit of a modern get liner would
            be completely bewildered by the array of gauges and controls before
            him - but he would not be surprised or bothered by this because he
            recognizes that flying an airplane is a complicated task that he is
            unable to perform.   However, when he struggles to operate a door,
            switches, water faucets, and other common everyday devices,
            he becomes quite upset.
          </p>
          <p>
            An untrained person seated in the cockpit of a modern get liner would
            be completely bewildered by the array of gauges and controls before
            him - but he would not be surprised or bothered by this because he
            recognizes that flying an airplane is a complicated task that he is
            unable to perform.   However, when he struggles to operate a door,
            switches, water faucets, and other common everyday devices,
            he becomes quite upset.
          </p>            
          <p>
            An untrained person seated in the cockpit of a modern get liner would
            be completely bewildered by the array of gauges and controls before
            him - but he would not be surprised or bothered by this because he
            recognizes that flying an airplane is a complicated task that he is
            unable to perform.   However, when he struggles to operate a door,
            switches, water faucets, and other common everyday devices,
            he becomes quite upset.
          </p>
          <p>
            An untrained person seated in the cockpit of a modern get liner would
            be completely bewildered by the array of gauges and controls before
            him - but he would not be surprised or bothered by this because he
            recognizes that flying an airplane is a complicated task that he is
            unable to perform.   However, when he struggles to operate a door,
            switches, water faucets, and other common everyday devices,
            he becomes quite upset.
          </p>
          </section>
        </div>
      </div>
    );
  }
}

export default PageContainer;
