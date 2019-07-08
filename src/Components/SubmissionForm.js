import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class SubmissionForm extends React.Component {
    state = {
        name: '',
        points: 0,
        columnId: 'column1',
        phase: 1,
        err: {
            name: '',
            points: ''
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target
        this.setState({ ...this.state, [id]: value })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newItem = {
            id: this.state.name,
            name: this.state.name,
            points: this.state.points,
            columnId: this.state.columnId,
            phase: this.state.phase,
        }

        this.props.submit(newItem)
        this.props.close()
    }


    render() {
        return (
            <>
                <Form>
                    <Form.Group controlId='name' onChange={this.handleChange}>
                        <Form.Label>Story Name</Form.Label>
                        <Form.Control type='text' rows='1' />
                    </Form.Group>

                    <Form.Group controlId='points' onChange={this.handleChange}>
                        <Form.Label>Story Points</Form.Label>
                        <Form.Control type='number' rows='1' />
                    </Form.Group>

                    <Form.Group controlId="phase" onChange={this.handleChange}>
                        <Form.Label>Phase</Form.Label>
                        <Form.Control as="select">
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="columnId" onChange={this.handleChange}>
                        <Form.Label>Status</Form.Label>
                        <Form.Control as="select">
                            <option value={'column1'}>To Do</option>
                            <option value={'column2'}>In Progress</option>
                            <option value={'column3'}>Ready for Systest</option>
                            <option value={'column4'}>Ready for Prod</option>
                            <option value={'column5'}>Done</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Create
                </Button>

                </Form>
            </>
        )
    }
}

export default SubmissionForm;
