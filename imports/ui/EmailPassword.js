import React, {Component} from 'react';
import PropTypes from "prop-types";

export default class EmailPassword extends Component {

    handleEmail(e) {
        this.props.onEmailChange($("#email"+this.props.typeAuth).val());
    }

    handlePswd(e) {
        this.props.onPswdChange($("#password"+this.props.typeAuth).val());
    }

    handlePswdVerify(e) {
        this.props.onPswdVerChange($("#passwordVer").val());
    }

    render() {
        return (
            <div className="card col-4">
                <h2 className="card-header">{this.props.typeAuth}</h2>
                <form onSubmit={this.props.submitAction}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input placeholder="Email" type="email" id={"email"+this.props.typeAuth}
                               className="form-control"
                               onChange={this.handleEmail.bind(this)}
                               aria-label="Text input for email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input placeholder="Password" type="password" id={"password"+this.props.typeAuth}
                               className="form-control"
                               onChange={this.handlePswd.bind(this)}
                               aria-label="Text input for password"
                        />
                    </div>
                    {
                        this.props.typeAuth === "Register" ?
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input placeholder="Password" type="password" id="passwordVer"
                                       className="form-control"
                                       onChange={this.handlePswdVerify.bind(this)}
                                       aria-label="Text input for verifying password"
                                />
                            </div>
                            : null
                    }
                    <div className="form-group">
                        <button type="submit"
                                className="btn btn-primary"
                                disabled={this.props.disableButton}
                                aria-label={this.props.typeAuth + " button"}>
                            {this.props.typeAuth}
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

EmailPassword.propTypes = {
    submitAction: PropTypes.func.isRequired,
    typeAuth: PropTypes.string.isRequired,
    onEmailChange: PropTypes.func.isRequired,
    onPswdChange: PropTypes.func.isRequired,
    disableButton: PropTypes.bool.isRequired,
    onPswdVerChange: PropTypes.func,
};