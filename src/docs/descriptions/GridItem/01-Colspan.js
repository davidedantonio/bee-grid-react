import React from 'react';

export default function Colspan() {
  return (
    <div>
      <h1>Colspan</h1>
      <p>
        You can specify, on a column item, how many grid columns the item span. It's very simple
        just add <code>colspan={'{i}'}</code> where <code>i</code> is the number of columns to span.
      </p>
    </div>
  );
}
