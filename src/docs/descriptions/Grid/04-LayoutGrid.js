import React from 'react';

export default function LayoutGrid() {
  return (
    <div>
      <h2>Grid breakpoints</h2>
      <p>See how aspects of the BeeGrid grid system work across multiple devices.</p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th className="text-center">
              Extra small<br />
              <small>≥0px</small>
            </th>
            <th className="text-center">
              Small<br />
              <small>≥480px</small>
            </th>
            <th className="text-center">
              Medium<br />
              <small>≥960px</small>
            </th>
            <th className="text-center">
              Large<br />
              <small>≥1280px</small>
            </th>
            <th className="text-center">
              Extra large<br />
              <small>≥1440px</small>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="text-nowrap" scope="row">Max container width</th>
            <td>none</td>
            <td>640px</td>
            <td>1024px</td>
            <td>1280px</td>
            <td>1440px</td>
          </tr>
          <tr>
            <th className="text-nowrap" scope="row">Class prefix</th>
            <td><code>.cols-*</code></td>
            <td><code>.cols-sm-*</code></td>
            <td><code>.cols-md-*</code></td>
            <td><code>.cols-lg-*</code></td>
            <td><code>.cols-xl-*</code></td>
          </tr>
          <tr>
            <th className="text-nowrap" scope="row"># of columns</th>
            <td colSpan="5">12</td>
          </tr>
          <tr>
            <th className="text-nowrap" scope="row">Grid gap</th>
            <td><code>12px</code></td>
            <td><code>16px</code></td>
            <td><code>18px</code></td>
            <td><code>20px</code></td>
            <td><code>24px</code></td>
          </tr>
        </tbody>
      </table>
      <p>You can specify columns number class on the <code>Grid</code> component with <code>cols</code> property. For example if you want a grid with six columns for each brekpoint you can specify the <code>cols={6}</code> property.</p>
    </div>
  );
}
