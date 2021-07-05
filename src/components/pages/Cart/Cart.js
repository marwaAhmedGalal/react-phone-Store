import React, { Component } from 'react';
import Title from '../Title';
import CartColums from './CartColums';
import EmptyCart from './EmptyCart';
import { ProductConsumer, ProductConsuner } from '../../../container/Context';
import CartList from './CartList'
import CartTotals from './CartTotal'

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <>
                                    <Title name="your" title="cart" />
                                    <CartColums />
                                    <CartList value={value} />
                                    <CartTotals value={value} />
                                </>
                            )
                        } else {
                            return (<EmptyCart />)
                        }
                    }}
                </ProductConsumer>


            </section>

        );
    }
}
