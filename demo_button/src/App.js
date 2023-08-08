import React from "react";
import Button from "./components/Button/Button";


function App() {
  return (
    <React.Fragment>
      <h1>Botones: </h1>
      <Button clase="like_button" texto="Like"/>
      <Button clase="dislike_button" texto="Dislike"/>
    </React.Fragment>
  );
}

export default App;
