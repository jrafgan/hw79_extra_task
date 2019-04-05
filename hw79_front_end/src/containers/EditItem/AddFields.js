import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {
    createCategory,
    createPlace,
    deleteCategory,
    deletePlace} from "../../store/actions/itemActions";
import FieldForm from "../../components/itemForm/fieldForm";

class AddFields extends Component {

    state = {
        name: '',
        description: '',
        fieldName: '',
        showSelect: true,
    };
    submitFormHandler = e => {
        e.preventDefault();
        if (this.state.fieldName === "categories") {
            this.props.submitCategory(this.state).then(() => {
                this.props.history.push('/')
            });
        } else {
            this.props.submitPlace(this.state).then(() => {
                this.props.history.push('/');
            });
        }
    };

    inputChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    selectChangeHandler = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    render() {

        return (
            <Fragment>
                <h3>Добавить поле</h3>

                <FieldForm
                    name={this.state.name}
                    description={this.state.description}
                    inputHandler={this.inputChangeHandler}
                    selectHandler={this.selectChangeHandler}
                    submitForm={this.submitFormHandler}
                    fieldName={this.state.fieldName}
                    show={this.state.showSelect}/>
            </Fragment>
        );
    }
}


const mapStateToProps = state => ({
    categories: state.items.categories,
    places: state.items.places

});

const mapDispatchToProps = dispatch => ({
    deleteCategory: (id) => dispatch(deleteCategory(id)),
    deletePlace: (id) => dispatch(deletePlace(id)),
    submitPlace: (placeData) => dispatch(createPlace(placeData)),
    submitCategory: (categoryData) => dispatch(createCategory(categoryData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFields);