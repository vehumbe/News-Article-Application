import React from "react";
import { Button } from "./components/ui/button";

const App = () => {
  return (
    <div>
      <h1 class="text-3xl font-bold underline text-red-500">Hello world!</h1>
      <Button className="bg-red-400" variant="ghost">
        Click me
      </Button>
    </div>
  );
};

export default App;
