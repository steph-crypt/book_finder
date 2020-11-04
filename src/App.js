import React from "react";
import ReactDOM from "react-dom";
import Author from "./Author"

 const App = () => {
    return ([
        <div id="important">
          <h1>Feminist Authors</h1>
            <Author name="Toni Morrison" category="Feminist" intersectionality="POC"/>
            <Author name="Joyce Carol Oates" category="Feminist" intersectionality="n/a"/>
            <Author name="Virginia Woolf" category="Feminist" intersectionality="Mental Illness"/>
        </div>
    ]);
  };

ReactDOM.render(React.createElement(App), document.getElementById("root"));
