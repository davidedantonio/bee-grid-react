import React from 'react';

export default function LayoutExampleOne() {
  return (
    <div>
      <h1>Compoents Overview</h1>
      <ul>
        <li>
          <p><strong>Layout Container</strong>: in which Header, Nav, Content and Footer can be nested, and can be placed.</p>
        </li>
        <li>
          <p><strong>Header</strong>: The top layout with default style, in which any element can be nested.</p>
        </li>
        <li>
          <p><strong>Nav</strong>: A simple sidebar with default style, in which any element can be nested.</p>
        </li>
        <li>
          <p><strong>Main</strong>: The content layout with default style, in which any element can be nested, such as a grid container.</p>
        </li>
        <li>
          <p><strong>Footer</strong>: The bottom layout with default style, in which any element can be nested.</p>
        </li>
      </ul>
    </div>
  );
}
