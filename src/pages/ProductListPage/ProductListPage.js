import React, { Component } from "react";

import ProductList from "../../component/ProductList/ProductList";
import ProductItem from "../../component/ProductItem/ProductItem";
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import *as actions from "../../reduxField/actions"

class ProductListPage extends Component {

    constructor (props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        this.props.onFetchProducts()
    }

    showProductItems = (products) => {
        var result = null
        if(products.length > 0){
            result = products.map((product , index) => {
                return (
                    <ProductItem key={index} product={product} index={index} onDelete={this.onDelete}/>
                )
            })
        }
        return result
    }

    onDelete = (id) => {
        this.props.onDeleteProduct(id)
    }

    render(){
        var {products} = this.props
        return (    
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Link to="/add">
                        <button type="button" className="btn btn-info">
                            Thêm sản phẩm
                        </button>
                    </Link>
                    
                    <div className="panel panel-primary mt-15">
                        <div className="panel-heading">
                            <h3 className="panel-title">Danh sách sản phẩm</h3>
                        </div>
                        <ProductList >
                            {this.showProductItems(products)}
                        </ProductList>
                    </div>
                    
                </div>
            </div>  
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchProducts: () => {
            dispatch(actions.requestServer(dispatch))
        },
        onDeleteProduct: (id) => {
            dispatch(actions.requestServerDelete(dispatch , id))
        }
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(ProductListPage);
