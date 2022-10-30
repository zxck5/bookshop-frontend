import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useLocation} from "react-router-dom";
import {Form, Row,Col} from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
export default function (props){
    const [orderList, setOrderList] = useState([]);
    const [state, setState] = useState({});
    const [memberList,setMemberList] = useState([]);


    useEffect(()=>{
        axios.get("/members")
            .then(res => setMemberList(res.data))


    },[])

    const setInput = (event) => {

        let name = event.target.name;
        let value = event.target.value;
        setState({...state, [name] : value })
    }


    const submitForm = (e) => {
        e.preventDefault();
        let formData = new FormData();
        Object.keys(state).map(key => {
            formData.append(key, state[key]);
        })

        axios.post("/orders",formData)
            .then(res => {

                setOrderList(res.data);
            })
    }

    return (
        <div>
            <Form onSubmit={submitForm}>ORDER LIST
                <Form.Select size="sm" name={"memberEmail"} onChange={setInput}>
                    <option>select member</option>
                    {
                        memberList.map((m,index)=> (
                            <option key = {index} value={m.email}>
                                {m.email}
                            </option>
                        ))
                    }
                </Form.Select>

                <Form.Select size="sm" name={"orderStatus"} onChange={setInput}>
                    <option>order status</option>
                    <option>ORDER</option>
                    <option>CANCEL</option>
                </Form.Select>
                <input type="submit" value={"submit"}/>


            </Form>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Order Date</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {orderList.map(o=>{
                    return (
                        <tr>
                            <td>{o.id}</td>
                            <td>{o.memberEmail}</td>
                            <td>{o.status}</td>
                            <td>{o.orderDate}</td>
                            <td><Link
                                to = {"/orders/items"}
                                state = {{orderItems : o.orderItemInfos}}
                            ><Button>my items</Button></Link></td>
                            <td><Button>Cancel</Button></td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </div>

    )

}