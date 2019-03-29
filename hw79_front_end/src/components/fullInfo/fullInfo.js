import React, {Component, Fragment} from 'react';
import {fetchItems} from "../../store/actions/itemActions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import ItemThumbnail from "../../components/itemThumbnail/itemThumbnail";

class FullInfo extends Component {
    componentDidMount() {
        this.props.onFetchItems();
    };


    render() {
        console.log(this.props.items);

        return (
            <Fragment>
                <Link to="/items/new">
                    <button>
                        Изменить предмет
                    </button>
                </Link>

                {this.props.items.map(item => (
                    <div key={item.id} style={{marginTop: '10px'}}>
                        <div className="thumbnail_div">
                            <ItemThumbnail image={item.image}/>
                            <p>{item.Name}</p>
                            <p>{item.Description}</p>
                        </div>
                    </div>
                ))}

            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    items: state.items.items
});

const mapDispatchToProps = dispatch => ({
    onFetchItems: () => dispatch(fetchItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(FullInfo);