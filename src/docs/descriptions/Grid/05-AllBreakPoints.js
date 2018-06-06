import React from 'react';

export default function AllBreakPoints() {
  return (
    <div>
      <h1>Responsive classes</h1>
      <p>Beeui includes five tiers predefined classes for building complex responsive
        grids. You can define the behavior of your grids on extra small,
        small, medium, large and extra large devices as you see fit.</p>

      <h2>Specify all breakpoints</h2>
      <p>If you want that your grid have a different behavior for each device size,
        you can specify the number of columns on the container usign the <code>{'{bp}'}={'{i}'}</code> classes, where bp is represent the breakpoint property and i the
        number of columns.</p>
    </div>
  );
}
