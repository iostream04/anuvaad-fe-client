import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
 
class DropZone extends Component{
  
 
  render(){
    const { handleChange, style} = this.props;
    return (
      // <div style={{textAlign:'center',minWidth:200,marginTop:'20%'}}>
      // <input type="file" accept=".docx" onChange={handleChange} />
      // </div>
      <DropzoneArea 
        onDrop={handleChange} maxFileSize={20000000} style={{marginTop:'20%'}} acceptedFiles={['.docx']} dropzoneText="Please Add/Drop docx file here" filesLimit={1}
        ></DropzoneArea>
    )  
  }
} 
 
export default DropZone;
