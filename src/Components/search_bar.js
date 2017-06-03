import React,{Component} from 'react';

/*const SearchBar=()=>{
    return <input/>
};*/

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term:' '};
        this.onInputChanged=this.onInputChanged.bind(this);
}

onInputChanged(event){
    this.setState({term:event.target.value});
    this.props.onSearchTermChange(event.target.value)
}

    render(){
        return (
            <div className='search-bar'>
            <input className='search-bar input'
            value={this.state.term}
            onChange={this.onInputChanged}
        />
            </div>)
    }
}

export default SearchBar;