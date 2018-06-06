import React from 'react';

export default function GridContainerFluid() {
  return (
    <div className="mt-2">
      <h2>Fluid Container</h2>
      <p>
        If you want to use a full width continer you need to specify to <code>Grid</code> component a specific properties called
        <code>container</code>. This property by can assume two values: <code>standard</code> by default, and <code>fluid</code>.
        If you specify the first value you can obtain the above behavior, but if you specify the second one you can obtain following
        behaviour.
      </p>
    </div>
  );
}
