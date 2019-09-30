import React, { Component } from "react";

import styles from "./testscreen.css";
import {
    usePopoverState,
    Popover,
    PopoverDisclosure,
    PopoverArrow
  } from "reakit/Popover";

  const App = () => {
    return <Popover />;
  };

  Popover = ({ content, ...props }) => {
    const popover = usePopoverState();
    render () {
        return (
      
            <PopoverDisclosure {...popover}>
              {disclosureProps =>
                React.cloneElement(React.Children.only(content), disclosureProps)
              }
            </PopoverDisclosure>
            <BasePopover {...popover} {...props}>
              <PopoverArrow {...popover} />
              {props.children}
            </BasePopover>
        )
    }

  }

export default App;
