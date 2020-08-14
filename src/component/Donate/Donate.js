import React from 'react';
import img from './richard-bell.jpg';
import './donate.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Donate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            amount: '',
            phone: '',
            description: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        const user = { ...this.state }
        console.log(user);
        axios.post('/donation/donate', user)
            .then((res) => {
                console.log(res.data);

            }).catch((error) => {
                console.log(error);
            });

        setTimeout(() => {
            this.setState({
                firstname: '',
                lastname: '',
                email: '',
                amount: '',
                phone: '',
                description: ''
            });

        }, 1000);
        setTimeout(() => {
            this.props.history.push('/sponsorDashboard');

        }, 6000);

    }

    handleChange(e) {
        const { name, value, type } = e.target;

        type === 'number' ? this.setState({ [name]: value }) :
            type === 'tel' ? this.setState({ [name]: value }) :
                this.setState({
                    [name]: value
                });
    }


    render() {
        const notify = () => toast.success('Thanks for sponsoring a farmer');

        return (
            <div className="container" id="center" >
                <div className="row justify-content-center align-item-center item ">
                    <div className="col-lg-10 ">
                        <div className="row">
                            <div className="col-md-6 mgtop d-none d-md-flex flex-column">
                                <h3><span>Empower</span>Farmer</h3>
                                <h5 className="mt-2 mb-4">Every donation makes an impact for farmers</h5>
                                <p className="lead">When you donate to farmers, your generosity is immediately put to work helping us buy farm facilities for farmers</p>
                                <p className="lead">Your donation helps us to change the lives of the farmers</p>
                                <p className="lead">Kindly donate now.</p>
                            </div>
                            <div className="col-md-6 my-4 justify-content-center" id="form">
                                <form onSubmit={this.handleSubmit} >
                                    <div className="form-group">
                                        <label htmlFor="amount">Amount</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="number"
                                            placeholder="amount" required
                                            value={this.state.amount}
                                            onChange={this.handleChange}
                                            name='amount'
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="firstname">First Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstname"
                                            placeholder="first name" required
                                            onChange={this.handleChange}
                                            value={this.state.firstname}
                                            name='firstname'
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastname">Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lastname"
                                            placeholder="last name" required
                                            value={this.state.lastname}
                                            onChange={this.handleChange}
                                            name='lastname'
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="email" required
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            name="email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            placeholder="phone number" required
                                            value={this.state.phone}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <textarea
                                            className="form-control"
                                            id="description"
                                            name="description"
                                            rows="3"
                                            value={this.state.description}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <button
                                        onClick={notify}
                                        className="btn btn-success btn-login mb-2"
                                        id="btn-donate"
                                        type="submit"
                                        disabled={!this.state.amount || !this.state.firstname || !this.state.lastname || !this.state.email || !this.state.phone || !this.state.description}
                                    >Donate
                            </button>
                                    <ToastContainer />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Donate;
