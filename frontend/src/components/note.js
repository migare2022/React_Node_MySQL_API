import React from 'react';

import { FaTrashAlt } from 'react-icons/fa';
import { FaArchive } from 'react-icons/fa';
import { MdArchive } from 'react-icons/md';
import { MdModeEdit } from 'react-icons/md';



const Note = (props )  => {

    const {id, user_id, title, body, edited, state } = props.imagen;

       

	return (
        <div className="col-6 col-sm-6 col-md-6 colo-lg-6 mb-2">

            <div className="card">

            	<span
                 style={ { fontWeight: 'bold' } }
                >{title}</span>
            
            	<div className='note-footer'>

                <small>Last edited: </small>
                    <small>{edited}</small>

          

                    <button onClick={(e) => props.handleArchive(id, state, e)}>


                        {state
                                ? <MdArchive
                                style={{position: 'absolute', top:'50%', right: '14%',}}
                                size='1.4em'
                                />	
                                
                                : <FaArchive
                                style={{position: 'absolute', top:'50%', right: '14%',}}
                                size='1.2em'
                                />     
                      }
                        			
                    </button>   
                        

    
                        <button onClick={ props.handleEdit}>


                            
                        <MdModeEdit
                        style={{
                            position: 'absolute', top:'50%',right: '7%',
                            }}
    
                            className='Edit-icon'
                            size='1.4em'
                        />		
                         </button>   
        

            
                        
                        <button onClick={(e) => props.handleDelete(id, e)}>
                        <FaTrashAlt
                           style={{
                            position: 'absolute', top:'50%',right: '2%',
                            }}
    
                            className='Edit-icon'
                            size='1.2em' />
                            
                        </button>   
        
    
        

                </div>
            </div>
        </div>


	);
};

export default Note;

 