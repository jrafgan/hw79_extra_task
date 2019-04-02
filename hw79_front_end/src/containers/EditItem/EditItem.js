import React, {Component, Fragment} from 'react';
import ItemForm from "../../components/itemForm/itemForm";
import {connect} from "react-redux";
import {fetchItem, fetchCategories, fetchPlaces, putItem} from "../../store/actions/itemActions";

class EditItem extends Component {
    componentDidMount() {
        this.props.fetchItem(this.props.match.params.id);
        this.props.fetchCategories();
        this.props.fetchPlaces();
    }

    changeItem = itemData => {
        console.log(this.props.match);
        console.log(itemData);
        this.props.putItem(this.props.match.params.id, itemData).then(() => {
            this.props.history.push('/');
        });
    };

    render() {

        return (
            <Fragment>
                <h1>Изменить предмет</h1>
                <ItemForm
                    item={this.props.item}
                    categories={this.props.categories}
                    places={this.props.places}
                    onSubmit={this.changeItem}
                />
            </Fragment>
        );
    }
}


const mapStateToProps = state => ({
    item: state.items.item,
    categories: state.items.categories,
    places: state.items.places

});

const mapDispatchToProps = dispatch => ({
    fetchItem: (id) => dispatch(fetchItem(id)),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchPlaces: () => dispatch(fetchPlaces()),
    putItem: (id, itemData) => dispatch(putItem(id, itemData))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);