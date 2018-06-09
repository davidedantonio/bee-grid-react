import React, { Component } from 'react';

class IndexInstall extends Component {
  render() {
    return (
      <div>
        <h2 className="color-blue">Installation</h2>
        <p>
          Install Beegrid source files via <a href="https://www.npmjs.com" rel="noopener noreferrer" target="_blank">npm</a>.
          We take care of injecting the Components that you needed.
        </p>
        <figure className="highlight">
          <pre>
            <code className="language-sh" data-lang="sh">
              npm <span className="nb">install</span> @webeetle/bee-grid-react
            </code>
          </pre>
        </figure>
        <p>
          Or use <a href="https://yarnpkg.com/lang/en/" rel="noopener noreferrer" target="_blank">yarn</a>.
        </p>
        <figure className="highlight">
          <pre>
            <code className="language-sh" data-lang="sh">
              yarn add @webeetle/bee-grid-react
            </code>
          </pre>
        </figure>
      </div>
    )
  }
}

export default IndexInstall;
