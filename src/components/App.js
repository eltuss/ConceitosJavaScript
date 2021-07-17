import { date } from "language-tags";
import React from "react";

class App extends React.Component{
  render(){
    return(
      <>
        <p>
        Meu Primeiro Paragrafo !!
      </p>
       <p>
       Meu Segundo Paragrafo !!
     </p>
     <p>
       {new Date().toLocaleDateString('pt-BR')}
     </p>
      </>
    );
  }
}

export default App;
