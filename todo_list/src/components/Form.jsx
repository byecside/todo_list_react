import React from "react";

const Form = (props) => (
    <form onSubmit={props.handleAdd}>
        <div >
            <label className="label">Your todo:</label>
            <input name="title" type="text" className="input" />
            <input type="submit" value="Add" className="button is-secondary" />
        </div>
    </form>
);

export default Form;