import React from 'react';
import Task from './Task';
import {Droppable} from 'react-beautiful-dnd'
import Modal from 'react-bootstrap/Modal'
import SubmissionForm from './SubmissionForm'
import { SketchPicker } from 'react-color';

class Column extends React.Component{
    state = {create: false,
    showSelector: false}

    handleChangeComplete = (color) => {
        this.props.colorChange((Number(this.props.column.id.slice(-1)) -1) , color.hex)
      };
    
    handleDoubleClick = (e) => {
        console.log(e.target)
        if(e.target.id.includes("column")){
            this.setState({showSelector: true})
        }
    }

    handleShow= () => {
        this.setState({ create: true });
    }

    handleClose= () => {
        this.setState({ create: false });
    }

    render(){
        return(
           <div className={ "column"} style={{background: this.props.color}} onDoubleClick={this.handleDoubleClick}>
               
               <div className='title'> <h3>{this.props.column.title}</h3></div>

                <Droppable droppableId={this.props.column.id}>
                    {(provided) => (
                        <div id={this.props.id} className='tasklist' ref={provided.innerRef} 
                        {...provided.droppableProps}
                        >
                        
                            {this.props.tasks.map((task, index) =>(
                                <Task key={task.id} task={task} index={index}
                                        submit={(res) => this.props.submit(res)}
                                        columnId={task.stage}
                                        allowDrag={this.props.allowDrag}
                                        remove ={(pos) => this.props.remove(pos)}/>
                            ) )}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>



                <Modal size='sm' show={this.state.showSelector} onHide={() => this.setState({showSelector:false})}>
                
                <Modal.Header closeButton>
                    <Modal.Title>Select a colour</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <SketchPicker
                        color={ this.props.color }
                        onChangeComplete={ this.handleChangeComplete }
                    />
                </Modal.Body>

            </Modal>


            

                <Modal size='sm' show={this.state.create} onHide={this.handleClose}>
                
                    <Modal.Header closeButton>
                        <Modal.Title>Create a new event</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <SubmissionForm columnId={this.props.column.id} 
                        submit={(res, id) => this.props.submit(res, id)}
                        close={() => this.handleClose()}/>
                    </Modal.Body>

                </Modal>


                
           </div>
                   
              
                
        )
    }
}

export default Column