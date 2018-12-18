import React, { Component} from 'react';
import VideoPlayerLayout from '../components/video-player'
import Video from '../components/video';
import Title from '../components/title';

class VideoPlayer extends Component {
    render() {
        return (
            <VideoPlayerLayout>
                <Title title="Mi título"/>
                <Video 
                    autoplay={false}
                    src={"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"}
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer