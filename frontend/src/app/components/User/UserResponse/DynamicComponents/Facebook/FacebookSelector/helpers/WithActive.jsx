import React from 'react';

export const withActive = (Component) => {
  return ({ ...props }) => {
    const [active, setActive] = React.useState(false);

    const handleMouseDown = React.useCallback(() => {
      setActive(true);
    }, []);
    const handleMouseUp = React.useCallback(() => {
      setActive(false);
    }, []);

    return (
      <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        <Component {...props} active={active} />
      </div>
    );
  };
};

export default withActive;