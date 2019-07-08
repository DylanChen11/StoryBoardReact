import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class SubmissionForm extends React.Component{
    state={
        name: this.props.name ? this.props.name : '',
        points: this.props.points ? this.props.points : 0,
        phase: this.props.phase ? this.props.phase : '',
        err:{
            name:'',
            points:''
        }
    }

    handleChange = (e) =>{
        e.preventDefault();
        const {id, value} = e.target
        this.setState({...this.state, [id]:value})

    }

    handleClose = (e) => {
        e.preventDefault()
        const editedTask = {
            id : this.props.taskId,
            name: this.state.name,
            points:this.state.points,
            columnId: this.props.columnId, 
            phase: Number(this.state.phase)
        }
        this.props.edit(editedTask)
    }

    handleDelete = (e) => {
        e.preventDefault()
        this.props.delete()
    }
  
  
  render(){
    return(
        <>
            <Form>
                <Form.Group controlId='name' onChange={this.handleChange}>
                    <Form.Label>Story Name</Form.Label>
                    <Form.Control type='text' rows='1' defaultValue={this.state.name}/>
                </Form.Group>

                <Form.Group controlId='points' onChange={this.handleChange}>
                    <Form.Label>Story Points</Form.Label>
                    <Form.Control type='number' rows='1' defaultValue={this.state.points}/>
                </Form.Group>

                <Form.Group controlId="phase" onChange={this.handleChange}>
                        <Form.Label>Phase</Form.Label>
                        <Form.Control as="select">
                            <option value={1} selected={this.state.phase === 1 ? "selected" : ''}>1</option>
                            <option value={2} selected={this.state.phase === 2 ? "selected" : ''}>2</option>
                            <option value={3} selected={this.state.phase === 3 ? "selected" : ''}>3</option>
                        </Form.Control>
                </Form.Group>

                <div style={{ "display": "flex", "justifyContent": "space-between" }}>
                    <Button variant="primary" type="submit" onClick={this.handleClose}>
                        Save 
                    </Button>

                    <Button variant="danger" onClick={this.handleDelete}>
                        Delete 
                    </Button>
                </div>

            </Form>
        </>
    )
  }
}

export default SubmissionForm;
