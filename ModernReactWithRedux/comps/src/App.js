import React from "react";
import Button from "./Button";

const App = () => {
  return (
    <div>
      <div>
        <Button success rounded outline>
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy NOW!!
        </Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          Do Something
        </Button>
      </div>
    </div>
  );
};

export default App;
