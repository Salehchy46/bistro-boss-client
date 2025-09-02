import React from 'react';
import useCart from '../../../hooks/useCart';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {

    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    return (
        <div className='m-4'>
            <div className='flex justify-evenly my-5'>
                <h2 className='text-3xl'>Items: {cart.length}</h2>
                <h2 className='text-3xl'>Total product price: {totalPrice}</h2>
                <button className='btn btn-primary'>Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*Map of the cart */}
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.price}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs"><FaTrash className='text-xl text-red-600'></FaTrash></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;