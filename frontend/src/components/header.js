import React from 'react';
import EditForm from './EditForm.tsx';
import "./header.css";


const Header = ({ handleToggleMode, mode }) => {
	

		return (

			<div className="row">
	
				<div className="form-group col-md-3">
				<h1>        </h1>
				<h1>My Notes</h1>
				</div>
				
				<div className="form-group col-md-2">
			   
			   			   
				<EditForm />


				</div>
				<div className="form-group col-md-2">

				

				<button
				
				style={{
					position: 'absolute', top: '6%',
					  }}
	
					  onClick={ handleToggleMode }
					 
					className='save'
				>
				{ mode
					? "Notes"
					: "Archived notes"
				}
					
				</button>
				</div>
	
			</div>
		);
};

export default Header;
