import React, { useState} from 'react';
import 'antd/dist/antd.css'

import "./EditForm.css";
import formConfig from "./formConfig.json";
import { v4 as uuid_v4 } from "uuid";

import { Modal} from 'antd';


interface FormConfigItem {
  id: string;
  type: string;
  name: string;
  options?: {
    label?: string;
    value?: number;
  };
 
}

const _formConfig: FormConfigItem[] = formConfig.map((el:any) => ({
  ...el,
  id: uuid_v4(),
}));



function EditForm() {
  const [values, setValues] = useState<any>({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  const fecha = new Date();

  const showModal = () => {
    setIsModalVisible(true);
  };

  

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  



  const updateAPI = () =>  {
   
     // ACTUALIZAR API

     const value = {
      id: '',
      user_id: '1',
      title : values.Titulo,
      body : values.Content,
      edited: fecha.toDateString(),
      state:'0'  };

    fetch("/addnote", {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(value)
    }).then (respuesta => respuesta.json () )

    alert("Note Saved");

  }

  const formSubmit = () => {
    console.log(values.Titulo)
   
    updateAPI ();
   
  };

  const renderInput = (el: any) => {
    switch (el.type) {
      case "Title":
        return (
          <label className='select-label'> {el.label} 
          <textarea
            
			      cols='40'

            key={el.id}
            type={el.type}
            placeholder={el.placeholder}
            value={values[el.name]}
            onChange={(e) => 
              setValues({ ...values, [el.name]: e.target.value })}
          />
        </label>  
        );


          case "Content":
            return (
              <label className='select-label'> {el.label} 
               
               <textarea
                rows='5'
			        	cols='40'
              
                key={el.id}
                //type={el.type}
                placeholder={el.placeholder}
                value={values[el.name]}
                onChange={(e) => setValues({ ...values, [el.name]: e.target.value })}
              />
            </label>  
            );
    }
  };

  return (
 
 <div className="EditForm">
      <form>

      <div className="Btn" 
      style={{
        position: 'absolute', top: '5%',
          }}

      onClick={showModal}>
		         Create Note 
     			 </div>


      <Modal title="Create/ Edit note" visible={isModalVisible}  onCancel={handleCancel} footer={null}>
         {_formConfig.map(renderInput)}
        

        <div className="submitBtn" onClick={() => formSubmit()}>Save</div>
        
      </Modal>
       
      </form>
    </div>
  );
}

export default EditForm;
