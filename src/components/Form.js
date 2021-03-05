import React, { Component } from 'react'
import axios from 'axios';

const initialState = {
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    phone: null,
    TotalMarks: null,

    userNameError: '',
    lastNameError: '',
    emailError: '',
    phoneError: '',
    marksError: ''
};

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: null,
            firstName: '',
            lastName: '',
            email: '',
            phone: null,
            TotalMarks: null,

            userNameError: '',
            lastNameError: '',
            emailError: '',
            phoneError: '',
            marksError: ''

        }
    }

    handleIdChange = (event) => {
        this.setState({
            id: event.target.value
        })
    }

    handleUsernameChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handlePhoneNumberChange = (event) => {
        this.setState({
            phone: event.target.value
        })
    }

    handleTotalMarksChange = (event) => {
        this.setState({
            TotalMarks: event.target.value
        })
    }


    validate = () => {
        let userNameError = "";
        let lastNameError = '';

        let emailError = "";
        let phoneError = '';
        let marksError = '';

        if (!this.state.firstName) {
            userNameError = "First name cannot be blank";
        }

        if (!this.state.lastName) {
            lastNameError = "Last name cannot be blank";
        }

        if (!this.state.email.includes("@")) {
            emailError = "invalid email";
        }

        if (!this.state.phone || (this.state.phone).length != 10) {
            phoneError = "name cannot be blank / should be of 10 digit / Not a Number";
        }

        if (!(this.state.TotalMarks >= 0 && this.state.TotalMarks < 100) || !this.state.TotalMarks) {
            marksError = "invalid- Total Marks should be 0 - 100 ";
        }

        if (emailError || userNameError || lastNameError || marksError) {
            this.setState({ userNameError, lastNameError, emailError, marksError });
            return false;
        }
        return true;
    };


    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validate(event)) {
            //submit the form
            axios.post('http://localhost:3000/data', this.state)
                .then((response) => {
                    console.log("response" + response);
                }).catch((err) => {
                    console.log(err);
                })
            //clear the form
        } else {
            // do not submit
        }
    }


    updateTable = (event) => {
        event.preventDefault();
        if (this.validate(event)) {
            //submit the form
            axios.post('http://localhost:3000/update', this.state)
                .then((response) => {
                    console.log("response" + response);
                }).catch((err) => {
                    console.log(err);
                })
            //clear the form
        } else {
            // do not submit
        }
    }




    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>ID</label>
                    <input type='text' value={this.state.id} onChange={this.handleIdChange}></input>
                </div>


                <div>
                    <label>First Name</label>
                    <input type='text' value={this.state.firstName} onChange={this.handleUsernameChange}></input>
                </div>
                {/* for error */}
                <div style={{ fontSize: 16, color: "red" }}>
                    {this.state.userNameError}
                </div>


                <div>
                    <label>Last Name</label>
                    <input type='text' value={this.state.lastName} onChange={this.handleLastNameChange}></input>
                </div>
                {/* for error */}
                <div style={{ fontSize: 16, color: "red" }}>
                    {this.state.lastNameError}
                </div>

                <div>
                    <label>Email</label>
                    <input type='text' value={this.state.email} onChange={this.handleEmailChange}></input>
                </div>
                {/* for error */}
                <div style={{ fontSize: 16, color: "red" }}>
                    {this.state.emailError}
                </div>


                <div>
                    <label>Phone Number</label>
                    <input type='text' value={this.state.phone} onChange={this.handlePhoneNumberChange}></input>
                </div>
                {/* for error */}
                <div style={{ fontSize: 16, color: "red" }}>
                    {this.state.phoneError}
                </div>


                <div>
                    <label>Total Marks</label>
                    <input type='text' value={this.state.TotalMarks} onChange={this.handleTotalMarksChange}></input>
                </div>
                {/* for error */}
                <div style={{ fontSize: 16, color: "red" }}>
                    {this.state.marksError}
                </div>

                <button type='submit' >
                    Add
                </button>
                <button type='button' onClick={this.updateTable}>
                    Update
                </button>
                <button type='button'>
                    Count
                </button>
            </form>

        )
    }
}

export default Form
