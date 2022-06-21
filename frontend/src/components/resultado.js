import React, { Component } from 'react';
import Note from "./note"

class Resultado extends Component {


  
    handleDelete  (id, e) {
        e.preventDefault()
        const url=`delnote/${id}`;
        fetch(url, {
            method: 'DELETE'} )
          .then (respuesta => respuesta.json () )
       
          alert("Deleted...");
         
         

    }
      

      handleArchive (id, st, e) {

        e.preventDefault()
        var url=`archnote/${id}`;
        if(st===1) { url=`unarchnote/${id}`;
                     alert("Recovered...");
                    }   
        else alert("Archived...");
        
        fetch(url, {
            method: 'POST'} )
          .then (respuesta => respuesta.json () )
       
          
    }



      handleEdit = () =>  {
        alert("Note Edit");
        
      }


    mostrarNotas = () => {




        const notas = this.props.notas;
    
        if (notas.lenght === 0  ) return null;

        //console.log (notas);

        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    
                {notas.map(nota => ( 
                         <Note
                            key={nota.id}
                            imagen={nota}
                            handleDelete = {this.handleDelete}
                            handleArchive = {this.handleArchive}
                            handleEdit = {this.handleEdit}
                        /> 
            

                        ) ) } 
                </div>
            </React.Fragment>
    )
  }
  
  render () {
            return (
                <React.Fragment>
                    { this.mostrarNotas() }
                </React.Fragment>
            );

    }


}

export default Resultado;