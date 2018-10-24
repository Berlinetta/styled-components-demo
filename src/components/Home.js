import React, {Component} from "react";
import {connect} from "react-redux";
import Footer from './Footer';
import {decreaseCounter, increaseCounter} from "../actions/home";
import {testPrint} from '../utils/index';

import './Home.less';

class HomeApp extends Component {
    render() {
        const {counter, increaseCounter, decreaseCounter} = this.props;
        return (
            <section>
                <h2 className="title">Counter: {counter}</h2>
                <div>
                    <button onClick={increaseCounter}>Increase</button>
                    &nbsp;&nbsp;
                    <button onClick={decreaseCounter}>Decrease</button>
                </div>
                <br/>
                <p>{testPrint()}</p>
                <Footer/>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    counter: state.home.counter
});

const mapDispatchToProps = {
    increaseCounter,
    decreaseCounter
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeApp);
