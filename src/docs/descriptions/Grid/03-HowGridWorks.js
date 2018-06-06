import React from 'react';

export default function HowGridWorks() {
  return (
    <div>
      <h2>How grid works</h2>
      <p>BeeGrid use a main component, as described before, and its child component represent the columns of the grid system.</p>
      <p>The following example define a grid with twelve equal with columns with a predefined responsive behavior. Each column has a padding (called gap) for controlling the space between them. Here’s how it work:</p>

      <ul>
        <li>The <code>Grid</code> component provide to define <code>GridItem</code> behavior and its with.</li>
        <li>The rows are defined for breakpoints. For example, if you want your grid, on a medium-sized screen, must have three columns you can define <code>md={3}</code> property.</li>
        <li>To make the grid responsive, there are five grid breakpoints, one for each responsive breakpoint: extra small <code>xs</code>, small <code>sm</code>, medium <code>md</code>, large <code>lg</code>, and extra large <code>xl</code>.</li>
      </ul>
    </div>
  );
}
