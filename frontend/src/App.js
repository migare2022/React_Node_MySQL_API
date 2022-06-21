import {  Component } from "react";

import Resultado from "./components/resultado";
import Header from './components/header';



class App extends Component {

  
  state = {
   
    termino : 0,
    notes: []
  }


  consultarAPI = () => {
    const termino = this.state.termino;
    
    
    const url=`notesstate/${termino}`;

    
    fetch(url)
      .then (respuesta => respuesta.json () )
      .then (resultado => this.setState ({notes : resultado}))
      .then (resultado => this.setState ({mode : resultado}))


    }



datosBusqueda = (termino) => {
  this.setState (
    {termino
    },  () => {
      this.consultarAPI();
    }    )
 
}



togle_modo = () =>  {


  var termino=0;
  if (this.state.termino===0) termino =1;

  this.setState (
    {termino
    },  () => {
      this.consultarAPI();
    }    )
 
}


actualizar = () =>  {

 
  var termino=this.state.termino;

  this.setState (
    {termino
    },  () => {
      this.consultarAPI();
    }    )
 
}



  render()
    {

        
        return (
          
          <div className="app container">
           
    
            <div className="jumbotron">

            <Header handleToggleMode={this.togle_modo} 
                    mode = { this.state.termino } />


              </div>
                            
            <Resultado 
              notas = {this.state.notes} 
              actualizar = {this.actualizar} 
              />             

          <button
				
					  onClick= {this.actualizar} 
					> REFRESH
          </button>

          </div>




        );
  }
}

export default App;
