import React, {Component, Fragment} from 'react';
import {fetchItem} from "../../store/actions/itemActions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import ItemThumbnail from "../../components/itemThumbnail/itemThumbnail";

class FullInfo extends Component {
    componentDidMount() {
        this.props.fetchItem(this.props.match.params.id);
    };


    render() {
        console.log('thi is fullInfo props ', this.props.state);
        return (
            <Fragment>
                <div className="fullInfo_link_div">
                    <Link to="/" className="fullInfo_delete_link">
                        Удалить предмет
                    </Link>
                    <Link to="/items/new" className="fullInfo_change_link">
                        Изменить предмет
                    </Link>
                </div>
                {this.props.place ? <div className="fullInfo_div">
                    <ItemThumbnail image={this.props.item.image}/>
                    <div className="fullInfo_div_child">
                        <p>Предмет: {this.props.item.name}</p>
                        <p>Описание: {this.props.item.description}</p>
                    </div>
                    <div className="fullInfo_div_child">
                        <p>Категория: {this.props.category.name}</p>
                        <p>Описание: {this.props.category.description}</p>
                    </div>
                    <div className="fullInfo_div_child">
                        <p>Местоположение: {this.props.place.name}</p>
                        <p>Описание: {this.props.place.description}</p>
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
    state: state
});

const mapDispatchToProps = dispatch => ({
    fetchItem: (id) => dispatch(fetchItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(FullInfo);