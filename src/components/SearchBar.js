import React, {useState} from 'react';
import './SearchBar.css';
import { Field, reduxForm } from 'redux-form';
import ListSearch from './listMovies/ListSearch';

const SearchBar = (props) =>{

    const [term, setTerm] = useState("Man");

    const onSubmit = (formValue) => {
        setTerm(formValue.key);
    }

    const renderInput = ({input}) =>{
        return (
            <div className="wrap-input">
                <input id="search-input" {...input} placeholder="SEARCH FILMS" required />
                <button style={{background: 'transparent', border: '1px solid #585858'}} className="ui grey button"><i className="fas fa-search" /></button>
            </div>
        );
    }

    const renderSearch = () =>{
        return (
            <div className="search">
                <form className="ui form" onSubmit={props.handleSubmit(onSubmit)}>
                    <Field 
                        name="key" 
                        component={renderInput} 
                    />
                </form>
            </div>
        );
    };

    return( 
        <div className="wrap-search">
            <div className="search-input">
                {renderSearch()}
            </div>
            <div className="list-search">
                <ListSearch type={term} />
            </div>
        </div>
    );
};

const formWrapper = reduxForm({
    form: 'search',
}) (SearchBar);


export default formWrapper;
