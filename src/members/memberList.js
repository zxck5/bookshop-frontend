
import {useState,useEffect} from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table';


export default function (){
    const [memberList, setMemberList] = useState([]);


    useEffect(()=>{
        axios.get("/members")
            .then(res =>{
                setMemberList(res.data);
            })

    },[])


    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Street</th>
                        <th>ZIPCODE</th>
                    </tr>
                </thead>


                <tbody>
                {memberList.map(m=>{
                    return (
                        <tr>
                            <td>{m.id}</td>
                            <td>{m.email}</td>
                            <td>{m.city}</td>
                            <td>{m.street}</td>
                            <td>{m.zipcode}</td>
                        </tr>
                    )
                })}

                </tbody>
            </Table>
        </div>

    )


}