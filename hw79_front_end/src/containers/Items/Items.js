import React, {Component} from 'react';
import {fetchCategories, fetchItem, fetchItems, fetchPlaces} from "../../store/actions/itemActions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import ItemThumbnail from "../../components/itemThumbnail/itemThumbnail";

class Items extends Component {
    componentDidMount() {
        this.props.onFetchItems();
    };

    render() {
        return (
           <div className="items_div">
               <div className="items_link_div">
                   <Link to="/fields/edit" className="change_fields_link">Изменить поле</Link>
                   <Link to="/fields/add" className="change_fields_link">Добавить поле</Link>
                   <Link to="/items/new" className="add_item_btn">Добавить предмет</Link>
               </div>
               {this.props.items.map(item => (
                   <div key={item.id} style={{marginTop: '10px'}}>
                       <div className="thumbnail_div">
                           <ItemThumbnail image={item.image}/>
                           <Link to={'/items/' + item.id} onClick={this.props.selectItem} id={item.id}>{item.name}</Link>
                           <strong>
                               {item.description}
                           </strong>
                       </div>
                   </div>
               ))}

           </div>
        );
    }
}

const mapStateToProps = state => ({
   items: state.items.items,
   state: state.items
});

const mapDispatchToProps = dispatch => ({
   onFetchItems: () => dispatch(fetchItems()),
   onFetchCategories: () => dispatch(fetchCategories()),
   onFetchPlaces: () => dispatch(fetchPlaces()),
   selectItem: (e) => dispatch(fetchItem(e.currentTarget.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);