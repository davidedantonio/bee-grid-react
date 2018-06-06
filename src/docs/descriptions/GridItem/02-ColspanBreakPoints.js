import React from 'react';

export default function ColspanBreakPoints() {
  return (
    <div className="mt-2">
      <h2>Colspan Breakpoints</h2>
      <p>
        If you need to span a column on a specific screen size you can choose the
        <code>colspan{'{Bp}'}={'{i}'}</code> where <code>Bp</code> is one of the possible breakpoints and i the number of columns to span.
      </p>
    </div>
  );
}
