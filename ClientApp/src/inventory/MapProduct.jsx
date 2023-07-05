import React from "react";
import PropTypes from "prop-types";

function MapProduct(props) {

    const singleProduct = props.product;

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <tbody>
            <tr role="row" className="text-center align-middle">
                <td role="cell">
                    <span className="my-2">
                        {singleProduct.name}
                    </span>
                </td>

                <td role="cell">
                    <span className='my-2'>
                        {USDollar.format(singleProduct.price)}
                    </span>
                </td>

                <td role="cell">
                    <span className={`${singleProduct.quantity > 3 ? "my-2 text-danger text-decoration-underline" : "my-2"}`}>
                        {singleProduct.quantity}
                    </span>
                </td>

            </tr>
        </tbody>
    );
}

MapProduct.protoTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    })
}

export default MapProduct