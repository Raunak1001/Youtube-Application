import  React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Components/search_bar'
import YTSearch from 'youtube-api-search';
import VideoList from './Components/video_list'
import VideoDetails from './Components/video_details'
import _ from  'lodash'


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {videos: [],
            selectedVideo:null
        };

        this.videoSearchTerm('surfboard');
        this.videoSearchTerm=this.videoSearchTerm.bind(this)

    }

    videoSearchTerm(searchTerm){
        YTSearch({key: 'AIzaSyAZbcHvfb7_T0IZc_822pRwWH1Nk0kVg04', term: searchTerm}, (data) => {
            this.setState({videos: data,selectedVideo:data[0]});});
    }

    render() {

        const throtteledSearch =_.debounce((term)=>{this.videoSearchTerm(term)},300)

        return(
        <div>
                <SearchBar onSearchTermChange={throtteledSearch}/>
            <VideoDetails detail={this.state.selectedVideo}/>
                    <VideoList videos={this.state.videos}
                    onVideoSelect={(selectedVideo)=>this.setState({selectedVideo:selectedVideo})}
                    />

        </div>);
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
