import React from 'react';

export default function Product({ prd }) {
    

    return (
            <tr>
                <td>{prd.id}</td>
                <td>{prd.title}</td>
                <td>{prd.price}</td>
                <td>{prd.description}</td>
                <td>{prd.category}</td>
                <td><img src={prd.image} height={250} width={300} /></td>
                <td>{prd.rating.rate} / 5</td>
            </tr>
    );
}
