import React, { Component } from 'react';
export default class Emp1 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (

            <div className="limiter">
                <div class="container-login100" >
                    <div className="wrap-login100">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td>Ticket Id :</td>
                                    <td>
                                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Shopping App</a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Executive 1</a>
                                            <a class="dropdown-item" href="#">Executive 2</a>
                                            <a class="dropdown-item" href="#">Executive 3</a>
                                            <a class="dropdown-item" href="#">Executive 4</a>
                                            <a class="dropdown-item" href="#">Executive 5</a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>


        )
    }
}