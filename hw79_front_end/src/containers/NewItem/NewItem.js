import React, {Component, Fragment} from 'react';
import ItemForm from "../../components/itemForm/itemForm";
import {createItem, fetchCategories, fetchPlaces} from "../../store/actions/itemActions";
import {connect} from "react-redux";

class NewItem extends Component {

    componentDidMount() {
        this.props.fetchCategories();
        this.props.fetchPlaces();
    }

    createItem = itemData => {
        this.props.onItemCreated(itemData).then(() => {
           this.props.history.push('/');
        });
    };

    render() {
        return (
            <Fragment>
                {<h2>Создать новый предмет</h2>}
                <ItemForm onSubmit={this.createItem}
                          categories={this.props.categories}
                          places={this.props.places}/>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onItemCreated: itemData => dispatch(createItem(itemData)),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchPlaces: () => dispatch(fetchPlaces()),
});

export default connect(null, mapDispatchToProps)(NewItem);