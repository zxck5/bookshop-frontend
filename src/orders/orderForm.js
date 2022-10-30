import {Form} from "react-bootstrap";

export default function (props) {

    return(
        <Form onSubmit={props.submitForm}>

            <br/><br/>
            <label>Select member
                <input id={"member"} type="text" placeholder="type product name" name={"name"} onChange={props.setInput}/>
            </label>
            <br/><br/>
            <label>Select product
                <input id={"price"} type="text" placeholder="type product price" name={"price"} onChange={props.setInput}/>
            </label>
            <br/><br/>

            <label>Quantity
                <input id={"stockQuantity"} type="text" placeholder="type stockQuantity" name={"stockQuantity"} onChange={props.setInput}/>
            </label>
            <br/><br/>

            <input type="submit" value={"submit"}/>

        </Form>
    )
}