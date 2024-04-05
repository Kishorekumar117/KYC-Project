import React, { useState } from 'react';
import { Button, Overlay, Popover } from 'react-bootstrap';

const MyComponent = () => {
  const [showPopover, setShowPopover] = useState(false);

  const handleFocus = () => {
    setShowPopover(true);
  };

  const handleBlur = () => {
    setShowPopover(false);
  };

  return (
    <div>
      <Button
        className="btn btn-lg btn-danger"
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        Dismissible popover
      </Button>

      <Overlay
        show={showPopover}
        target={() => document.querySelector(".btn-lg.btn-danger")}
        placement="auto"
      >
        <Popover id="popover-basic">
          <Popover.Header as="h3">Dismissible popover</Popover.Header>
          <Popover.Body>
            And here's some amazing content. It's very engaging. Right?
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
};

export default MyComponent;
