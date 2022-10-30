
import {useState,useEffect} from 'react';
import axios from "axios";
import Button from "react-bootstrap/Button";
import {Link, useNavigate} from "react-router-dom";
import Table from 'react-bootstrap/Table';
import {NavLink} from "react-bootstrap";


export default function (){
    const [itemList, setItemList] = useState([]);



    useEffect(()=>{
        axios.get("/items")
            .then(res =>{
                setItemList(res.data);
            })

    },[])



    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock Quantity</th>
                        <th>Author</th>
                        <th>ISBN</th>
                    </tr>
                </thead>
                <tbody>
                {itemList.map(i=>{
                    return (
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.name}</td>
                            <td>{i.price}</td>
                            <td>{i.stockQuantity}</td>
                            <td>{i.author}</td>
                            <td>{i.isbn}</td>
                            <td><Link to={'/items/'+i.id+"/edit"}
                                      state={{item : i}}
                            ><Button>Modify</Button></Link></td>
                        </tr>
                    )
                })}

                </tbody>
            </Table>
        </div>
    )
}

