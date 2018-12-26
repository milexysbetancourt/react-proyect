import React from 'react';
import VolumenIcon from '../../icons/components/play';
import './volume.css';

function Volume(props) {
    return (
        <button
            className="Volume"
            onClick={props.handleVolumeToggle}
        >
            <VolumenIcon 
                color="white"
                size={25}
            />
            <div className="Volume-range">
                <input 
                    type="range"
                    min={0}
                    max={1}
                    step={.05}
                    onChange={props.handleVolumeChange}
                    value={props.value}
                />
            </div>
        </button>
    )
}

export default Volume;