import Link from 'next/link'
import {decrease, increase,deleteItem} from '../store/Actions'

function CartItem({item, dispatch, cart}) {
    return (
        <tr>
            <td>
                <img src={item.image} alt="" className="img-thumbbail" style={{maxWidth:'80px'}}/>

            </td>
            <td style={{minWidth:'200px'}}>
                <h5>
                    <Link href={`/product/${item.id}`}>
                        <a>{item.title}</a>
                    </Link>
                </h5>
                <h6 className='text-danger'>Total : ${Math.round(item.quantity * item.price)} </h6>
                <h6 className="text-capitalize text-info">
                    {item.category}   
                </h6>
            </td>
            <td className='align-middle' style={{minWidth:'150px', cursor:'pointer'}}>
                <button className='btn btn-outline-secondary'
                 onClick={()=>dispatch(decrease(cart, item.id))}
                 disabled ={item.quantity < 1? true:false}
                 >-</button>
                <span className='px-3'>{item.quantity}</span>
                <button className='btn btn-outline-secondary'
                 onClick={()=>dispatch(increase(cart, item.id))}
               
                 >+</button>
            </td>

            <td className='align-middle' style={{minWidth:'50px', cursor:'pointer'}}>
                <i className='far fa-trash-alt text-danger'
                style={{fontSize:'18px'}} data-toggle='modal' data-target='#exampleModal'
                onClick={()=>dispatch({
                    type:'ADD_MODAL',
                    payload:{data:cart, id:item.id, title:item.title}
                })}></i>
                </td>
        </tr>
    )
}

export default CartItem
