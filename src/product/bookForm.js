import {Form} from "react-bootstrap";

export default function (props) {
    return (
        <Form onSubmit={props.submitForm}>

            <br/><br/>
            <label>Product Name
                <input id={"name"} type="text" placeholder="type product name" name={"name"} onChange={props.setInput}/>
            </label>
            <br/><br/>
            <label>Product Price
                <input id={"price"} type="text" placeholder="type product price" name={"price"} onChange={props.setInput}/>
            </label>
            <br/><br/>

            <label>Stock Quantity
                <input id={"stockQuantity"} type="text" placeholder="type stockQuantity" name={"stockQuantity"} onChange={props.setInput}/>
            </label>
            <br/><br/>

            <label>author:
                <input id={"author"} type="text" placeholder="type author" name={"author"} onChange={props.setInput}/>
            </label>

            <label>ISBN:
                <input id={"isbn"} type="text" placeholder="type isbn" name={"isbn"} onChange={props.setInput}/>
            </label>

            <input type="submit" value={"submit"}/>

        </Form>
    )
}