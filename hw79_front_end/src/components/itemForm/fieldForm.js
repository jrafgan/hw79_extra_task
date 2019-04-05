import React from 'react';

const FieldForm = (props) => {
    return (
        <div>
            <form className="fields_form" onSubmit={props.submitForm}>
                {props.show ? <select id="fieldName" onChange={props.selectHandler}>
                    <option>--Выберите поле--</option>
                    <option value="categories">Категория</option>
                    <option value="places">Местоположение</option>
                </select> : null}
                <label htmlFor="name">Название</label>
                <input
                    type="text" required
                    name="name" id="name"
                    placeholder={props.name !== '' ? props.name : `Предмет`}
                    value={props.name}
                    onChange={props.inputHandler}/>
                <label htmlFor="description">Описание</label>
                <textarea
                    name="description" id="description"
                    placeholder={props.description !== '' ? props.description : `Подробнее`}
                    value={props.description}
                    onChange={props.inputHandler}/>
                    <button type="submit" className="field_save_btn">Сохранить</button>
            </form>
        </div>
    );
};

export default FieldForm;