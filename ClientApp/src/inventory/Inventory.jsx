import React, { useState } from "react";
import { useEffect } from "react";
import * as inventoryService from "./inventoryServiceReact"
import MapProduct from "./MapProduct";

import { Table } from "reactstrap";

function Inventory() {

    const [state, setState] = useState({ arrayOfProducts: [], arrayOfSortedProducts: [], productsComponents: [] })


    useEffect(() => {

        inventoryService.getProducts().then(onGetProductsSuccess).catch(onGetProductsError);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onGetProductsSuccess = (response) => {
        const arrayOfProducts = response.data;

        //initial sorting aphabetically by name
        arrayOfProducts.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });

        console.log(arrayOfProducts);

        setState((prevState) => {
            const newState = { ...prevState };

            newState.arrayOfProducts = arrayOfProducts;
            newState.productsComponents = arrayOfProducts.map(mappingProduct);
            return newState;
        })
    };

    const mappingProduct = (aProduct) => {

        return (
            <MapProduct
                product={aProduct}
                key={"id-" + aProduct.name}
            >
            </MapProduct>
        )
    }

    const sortName = () => {
        console.log("sorting Name")

        setState((prevState) => {
            const newState = { ...prevState };

            newState.arrayOfSortedProducts = newState.arrayOfProducts.sort(
                function (a, b) {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                });

            //only first 5 sorted elements
            newState.arrayOfSortedProducts = newState.arrayOfSortedProducts.slice(0, 5);

            newState.productsComponents = newState.arrayOfSortedProducts.map(mappingProduct);
            return newState;
        })
    }

    const sortPrice = () => {
        console.log("sorting Price")

        setState((prevState) => {
            const newState = { ...prevState };

            newState.arrayOfSortedProducts = newState.arrayOfProducts.sort(
                function (a, b) {
                    if (a.price < b.price) {
                        return -1;
                    }
                    if (a.price > b.price) {
                        return 1;
                    }
                    return 0;
                });

            //only first 5 sorted elements
            newState.arrayOfSortedProducts = newState.arrayOfSortedProducts.slice(0, 5);

            newState.productsComponents = newState.arrayOfSortedProducts.map(mappingProduct);
            return newState;
        })

    }

    const sortQuantity = () => {
        console.log("sorting Quantity")

        setState((prevState) => {
            const newState = { ...prevState };

            newState.arrayOfSortedProducts = newState.arrayOfProducts.sort(
                function (a, b) {
                    if (a.quantity < b.quantity) {
                        return -1;
                    }
                    if (a.quantity > b.quantity) {
                        return 1;
                    }
                    return 0;
                });

            //only first 5 sorted elements
            newState.arrayOfSortedProducts = newState.arrayOfSortedProducts.slice(0, 5);

            newState.productsComponents = newState.arrayOfSortedProducts.map(mappingProduct);
            return newState;
        })
    }


    const onGetProductsError = (error) => {
        console.log("error", error)
    }

    return (
        <React.Fragment>
            <div>
                <h1 className="m-2">Inventory</h1>

                <div className="table-responsive col-6 mx-auto">
                    <Table className="table-hover" >
                        <caption className="caption-top">Products</caption>

                        <thead className="table-light">
                            <tr role="row" className='text-center align-middle'>

                                <th colSpan="1" role="columnheader" >
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-light dropdown-toggle" onClick={sortName} >
                                            Name
                                        </button>
                                    </div>
                                </th>

                                <th colSpan="1" role="columnheader">
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-light dropdown-toggle" onClick={sortPrice} >
                                            Price (USD)
                                        </button>
                                    </div>
                                </th>

                                <th colSpan="1" role="columnheader">
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-light dropdown-toggle" onClick={sortQuantity} >
                                            Quantity
                                        </button>
                                    </div>
                                </th>

                            </tr>
                        </thead>
                        {state.productsComponents}
                    </Table>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Inventory