import React, { Component } from "react";
import { Link } from 'react-router-dom'


class ProductItem extends Component {

    onDelete = (id) => {
        if(confirm('Bạn có muốn xóa không ? ')){// eslint-disable-line
            this.props.onDelete(id)
        }
    }

    render(){
        const {product , index} = this.props
        const labelCnd = product.status ? 'Còn hàng' : 'Hết hàng' 
        const classCnd = product.status ? "label label-success" : "label label-danger" 
        return (    
            <tr>
                <td>{index}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    
                    <span className={classCnd}>
                        {labelCnd}
                    </span>
                    
                </td>
                <td>
                    
                    <Link to={`/${product.id}/edit`} className="btn btn-success mr-15">
                        Sửa
                    </Link>
                    
                    <button type="button" className="btn btn-danger" onClick={() => this.onDelete(product.id)}>
                        Xóa
                    </button>
                    
                    
                </td>
            </tr> 
        );
    }
}

export default ProductItem;
