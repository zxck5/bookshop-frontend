import {useLocation} from "react-router-dom";
import Table from 'react-bootstrap/Table';

export default function () {
    const location = useLocation();

    if (location.state !== null) {
        let {orderItems} = location.state;
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Order Price</th>
                        <th>Count</th>
                    </tr>
                </thead>

                <tbody>
                {orderItems.map(e => {
                    return (
                        <tr>
                            <td>{e.itemName}</td>
                            <td>{e.orderPrice}</td>
                            <td>{e.count}</td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        )

    } else {
        return (
            <div>ERROR</div>
        )
    }


}