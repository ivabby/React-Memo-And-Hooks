import React from "react";

const Counter = ({ value, children, onClick }) => {
  console.log("Render: " + children);
  return (
    <div onClick={onClick}>
      {children}: {value}
    </div>
  );
};

// export default Counter;

// React memo will not re-render counter 2 because it will memoize the value
// of component
export default React.memo(Counter);
