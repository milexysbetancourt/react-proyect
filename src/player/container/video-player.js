import React, { Component} from 'react';
import VideoPlayerLayout from '../components/video-player'
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';

class VideoPlayer extends Component {
    state ={
        pause: true,
    }
    
    togglePLay = (event) => {
        this.setState({
            pause: !this.state.pause,
        })
    }

    componentDidMount() {
        this.setState({
            pause: (!this.props.autoplay)
        })
    }
    
    render() {
        return (
            <VideoPlayerLayout>
                <Title title="Mi título"/>
                <PlayPause 
                    pause={this.state.pause}
                    handleClick={this.togglePLay}
                />
                <Video 
                    autoplay={!this.props.autoplay}
                    src={"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"}
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer