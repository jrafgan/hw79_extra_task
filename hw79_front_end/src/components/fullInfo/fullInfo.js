import React, {Component, Fragment} from 'react';
import {deleteItem, fetchItem} from "../../store/actions/itemActions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import ItemThumbnail from "../../components/itemThumbnail/itemThumbnail";

class FullInfo extends Component {

    componentDidMount() {
        this.props.fetchItem(this.props.match.params.id);
    };

    onDeleteItem = () => {
        this.props.deleteItem(this.props.match.params.id).then(() => {
            this.props.history.push('/');
        });
    };

    render() {
        return (
            <Fragment>
                <div className="fullInfo_link_div">
                    <Link to="/" className="fullInfo_delete_link" onClick={this.onDeleteItem}>
                        Удалить предмет
                    </Link>
                    <Link to={`/items/${this.props.match.params.id}/edit`} className="fullInfo_change_link">
                        Изменить предмет
                    </Link>
                </div>
                {this.props.place ? <div className="fullInfo_div">
                    <ItemThumbnail image={this.props.item.image}/>
                    <div className="fullInfo_div_child">
                        <p><strong>Предмет:</strong> {this.props.item.name}</p>
                        <p><strong>Описание:</strong> {this.props.item.description}</p>
                    </div>
                    <div className="fullInfo_div_child">
                        <p><strong>Категория:</strong> {this.props.category.name}</p>
                        <p><strong>Описание:</strong> {this.props.category.description}</p>
                    </div>
                    <div className="fullInfo_div_child">
                        <p><strong>Местоположение:</strong> {this.props.place.name}</p>
                        <p><strong>Описание:</strong> {this.props.place.description}</p>
                    </div>
                </div> : null}
            </Fragment>
        );
    }
}


const mapStateToProps = state => ({
    item: state.items.item,
    category: state.items.category,
    place: state.items.place,
});

const mapDispatchToProps = dispatch => ({
    fetchItem: (id) => dispatch(fetchItem(id)),
    deleteItem: (id) => dispatch(deleteItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(FullInfo);