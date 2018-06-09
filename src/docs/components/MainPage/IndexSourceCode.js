import React, { Component } from 'react';

class IndexSourceCode extends Component {
  render() {
    return (
      <div>
        <h2 className="color-blue">Sorce Code</h2>
        <p>
          Clone Beegrid React repository from Github and start building awesome grid for your websites.
        </p>
        <figure className="highlight">
          <pre>
          <code className="language-sh" data-lang="sh">
            git clone https://github.com/davidedantonio/bee-grid-react.git
          </code>
          </pre>
        </figure>
        <p>
          And start to add your custom components.
        </p>
      </div>
    )
  }
}

export default IndexSourceCode;
