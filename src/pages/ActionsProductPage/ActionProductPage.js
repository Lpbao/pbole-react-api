import React, { Component } from "react";
import callAPI from '../../utils/apiCaller'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import *as actions from '../../reduxField/actions'

class ActionProductPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            id: '',
            name: '',
            price: '',
            status: false,
            edit: false
        }
    }

    onChange = async (e) => {
        const name = e.target.name
        const value = name === 'status' ? (e.target.checked ? true : false) : e.target.value
        await this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
        var {history} = this.props
        e.preventDefault()
        var product = {
            id: this.state.id,
            name: this.state.name , 
            price: parseInt(this.state.price),
            status: this.state.status
        }
        if(this.state.edit){
            this.props.onUpdate(history , product)
        }
        else{
            this.props.onAdd(history , product)
        }
    }

    componentDidMount(){
        var {match} = this.props
        if(match){
            const id = match.params.id
            this.props.getEditedProduct(id)
            this.setState({
                edit: true
            })
        }
        else{
            this.setState({
                edit: false
            })
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps){
            const {editedProduct} = nextProps 
            this.setState({
                id: editedProduct.id,
                name: editedProduct.name,
                price: editedProduct.price,
                status: editedProduct.status,
            })
        }
    }

    render(){
        const {name , price , status , edit} = this.state
        return (    
            
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSubmit}>
                    <h3>{edit? 'Chỉnh sửa sản phẩm':'Thêm mới sản phẩm'}</h3>
                    <div className="form-group">
                        <label>Tên sản phẩm:</label>
                        <input type="text" className="form-control" value={name} name="name" onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Giá sản phẩm:</label>
                        <input type="number" className="form-control" value={price} name="price" onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Trạng thái:</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" name="status" checked={status} onChange={this.onChange}></input>
                            Còn hàng
                        </label>
                    </div>

                    <Link className="btn btn-warning mr-15" to="/product-list">
                        Trở lại
                    </Link>
                    
                    <button type="submit" className="btn btn-primary">{edit?'Lưu sản phẩm' : 'Thêm sản phẩm'}</button>
                    
                </form>
            </div>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        editedProduct: state.editedProduct
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (history , product) => {
            dispatch(actions.requestServerAdd(dispatch , history , product))
        },
        getEditedProduct: (id) => {
            dispatch(actions.getEditedProduct(dispatch , id))
        },
        onUpdate: (history , product) => {
            dispatch(actions.requestServerUpdate(dispatch , history , product))
        },
        
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(ActionProductPage);
