import React, {Component} from 'react';
import {connect} from "react-redux";

class ItemForm extends Component {

    state = {
        name: '',
        category: '',
        place: '',
        description: '',
        image: null
    };

    submitFormHandler = event => {
        event.preventDefault();

        if (this.state.image) {
            const formData = new FormData();
            Object.keys(this.state).forEach(key => {
                if (this.state[key] !== null) {
                    formData.append(key, this.state[key]);
                }
            });
            this.props.onSubmit(formData);
        } else {
            this.props.onSubmit(this.state)
        }
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    selectChangeHandler = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        });
    };

    render() {

        return (
            <form onSubmit={this.submitFormHandler}>
                <div className="form_child_div">
                    <label htmlFor="name">Название</label>
                    <input
                        type="text" required
                        name="name" id="name"
                        placeholder={this.props.item ? this.props.item.name : `Предмет`}
                        value={this.state.name}
                        onChange={this.inputChangeHandler}/>
                </div>
                <div className="form_child_div">
                    <label htmlFor="category">Категория</label>
                    <select id="category" onChange={this.selectChangeHandler}>
                        <option>--Выберите категорию--</option>
                        {this.props.categories.map(item => <option value={item.id} key={item.id}>{item.name}</option>)}
                    </select>
                </div>
                <div className="form_child_div">
                    <label htmlFor="place">Местоположение</label>
                    <select id="place" onChange={this.selectChangeHandler}>
                        <option>--Выберите местоположение--</option>
                        {this.props.places.map(item => <option value={item.id} key={item.id}>{item.name}</option>)}
                    </select>
                </div>
                <div className="form_child_div">
                    <label htmlFor="description">Описание</label>
                    <textarea
                        name="description" id="description"
                        placeholder={this.props.item ? this.props.item.description : `Подробнее`}
                        value={this.state.description}
                        onChange={this.inputChangeHandler}/>
                </div>
                <div className="form_child_div">
                    <label htmlFor="image">Изображение</label>
                    <input
                        type="file"
                        name="image" id="image"
                        onChange={this.fileChangeHandler}/>
                </div>
                <div className="form_child_div">
                    <button type="submit" color="primary">Сохранить</button>
                </div>
            </form>
        );

    }
}

const mapStateToProps = state => ({
    categories: state.items.categories,
    places: state.items.places,
});

export default connect(mapStateToProps)(ItemForm);