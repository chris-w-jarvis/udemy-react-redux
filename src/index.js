import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import _ from 'lodash';

import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyDYAN27bSTMMkWdT6rRxQB9l90sglBYZ3U';

// example search
// YTSearch({key: API_KEY, term: 'surfboards'}, function (data) {
//   console.log(data);
// });

// new component
// this is a component CLASS, but the dom needs an instance
class App extends Component {

  constructor(props) {
    super(props);

    // instantiate video object in state
    this.state = {
      videos: [],
      selectedVideo: null
     };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // success callback function (what to do with data)
      // remember es6 shortcut { videos: videos }
      this.setState({ videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    // debounced search
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        // what is this referring too???? ;)
        onVideoClick={selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos} />
      </div>
    );
  }
}
// put its html on the page
// this is an INSTANCE
// ReactDOM.render(component, targetToRenderTo)
ReactDOM.render(<App />, document.querySelector('.container'));
