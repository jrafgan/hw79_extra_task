import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {
    deleteCategory,
    deletePlace,
    fetchCategories,
    fetchPlaces,
    putCategory, putPlace
} from "../../store/actions/itemActions";
import FieldForm from "../../components/itemForm/fieldForm";

class EditFields extends Component {

    state = {
        showForm: false,
        field: '',
        id: '',
        name: '',
        description: '',
    };

    componentDidMount() {
        this.props.fetchCategories();
        this.props.fetchPlaces();
    }

    getForm = (e) => {
        this.setState({showForm: true});
        let item;
        if (e.currentTarget.className === "category_p") {
            const ndx = this.props.categories.findIndex(item=>item.id == e.currentTarget.id);
            item = this.props.categories[ndx];

        } else {
            const ndx = this.props.places.findIndex(item=>item.id == e.currentTarget.id);
            item = this.props.places[ndx];
        }
        this.setState({field: e.currentTarget.className, id: item.id, name: item.name, description: item.description});
    };

    submitFormHandler = e => {
        e.preventDefault();
        if (this.state.field === "category_p") {
            this.props.changeCategory(this.state.id, this.state).then(() => {
                this.props.history.push('/');
            });
        } else {
            this.props.changePlace(this.state.id, this.state).then(() => {
                this.props.history.push('/');
            });
        }
    };

    inputChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    deleteField = (e) =>{
        if (e.currentTarget.className === "category_dlt_btn") {
            this.props.deleteCategory(e.currentTarget.id).then(() => {
            this.props.history.push('/');
        })
        } else {
            this.props.deletePlace(e.currentTarget.id).then(() => {
            this.props.history.push('/');
        })
        }
    };

    render() {
        return (
            <Fragment>
                <h3>Изменить поле</h3>
                <div className="fields_list_div">
                    <div className="category_list">
                        <p><strong>Поле Категория</strong></p>
                        {this.props.categories ? this.props.categories.map(item => <div className="each_item_div" key={item.id}><p className="category_p"
                                                                                                                     id={item.id}
                                                                                                                     onClick={this.getForm}>{item.name}</p><button id={item.id} className="category_dlt_btn"onClick={this.deleteField}>Delete</button></div>) :
                            <p>Loading...</p>}
                    </div>
                    <div className="place_list">
                        <p><strong>Поле Местоположение</strong></p>
                        {this.props.places ? this.props.places.map(item => <div className="each_item_div" key={item.id}><p className="place_p"
                                                                              id={item.id}
                                                                                                             onClick={this.getForm}>{item.name}</p><button id={item.id} className="place_dlt_btn"onClick={this.deleteField}>Delete</button></div>
                            ) :
                            <p>Loading...</p>}
                    </div>
                </div>

                {this.state.showForm ? <FieldForm
                name={this.state.name}
                description={this.state.description}
                inputHandler={this.inputChangeHandler}
                submitForm={this.submitFormHandler}/> : null}
            </Fragment>
        );
    }
}


const mapStateToProps = state => ({
    categories: state.items.categories,
    places: state.items.places

});

const mapDispatchToProps = dispatch => ({
    fetchCategories: () => dispatch(fetchCategories()),
    fetchPlaces: () => dispatch(fetchPlaces()),
    deleteCategory: (id) => dispatch(deleteCategory(id)),
    deletePlace: (id) => dispatch(deletePlace(id)),
    changeCategory: (id, data) => dispatch(putCategory(id, data)),
    changePlace: (id, data) => dispatch(putPlace(id, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditFields);