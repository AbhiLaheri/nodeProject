import React, { Component } from 'react';
export default class User_query extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            
            <center>
                <form>
                    <h2>Select Query For :</h2>

                    <input
                        type="radio"
                        label="Flipkart"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                    />Flipkart<br></br>
                    <input
                        type="radio"
                        label="Amazon"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                    />Amazon<br></br>
                    <input
                        type="radio"
                        label="Myntra"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                    />Myntra<br></br>
                    <input
                        type="radio"
                        label="Shein"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                    />Shein<br></br>
                    <input
                        type="radio"
                        label="Club Factory"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                    />Club Factory<br></br>
                    <br></br>

                    <h2>Write Your Query Here :</h2><br></br>
                    <br></br>
                    <textarea width="1000"></textarea>
                    <br></br>

                    <input type="submit" />
                    <input type="reset" />
                </form>
            </center>
            


        )
    }
}