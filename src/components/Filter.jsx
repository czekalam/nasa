import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadFromApi } from "../actions";
import { withRouter,Link } from 'react-router-dom';
import { Range } from 'rc-slider';
import '../style/Filter.css';
import 'rc-slider/assets/index.css';
import { FaSearch, FaImages,FaMusic, FaFilm } from 'react-icons/fa';
import { MediaButton } from './MediaButton';

export class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            year_start: 1920,
            year_end: 2019,
            audio: '',
            video: '',
            image: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAudio = this.handleAudio.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.handleVideo = this.handleVideo.bind(this);
        this.handleOnRange = this.handleOnRange.bind(this);
    }
    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        var dates = `&year_start=${this.state.year_start}&year_end=${this.state.year_end}`
        var hastypes = !!(this.state.audio||this.state.video||this.state.image);
        var types = (hastypes?'&media_type=':'')+this.state.audio+this.state.video+this.state.image;
        var searchText = this.state.value+types+dates;
        this.props.history.push(`/search/${searchText}`);
    }
    handleAudio(event) {
        if(this.state.audio) {
            this.setState({
                audio: ''
            });
        }
        else {
            this.setState({audio:'audio,'});
        }
    }
    handleImage(event) {
        if(this.state.image) {
            this.setState({
                image: ''
            });
        }
        else {
            this.setState({image:'image'});
        }
    }
    handleVideo(event) {
        if(this.state.video) {
            this.setState({
                video: ''
            });
        }
        else {
            this.setState({video:'video,'});
        }
    }
    handleOnRange(event) {
        this.setState({
            year_start: event[0],
            year_end: event[1]
        });     
    }
    render() {
        return (
            <header>
                <div className='Filter'>
                    <Link to={'/'}> <h1>NASA SEARCH</h1> </Link>
                    <form onSubmit={this.handleSubmit}>
                        <input className='text-input' type="text" value={this.state.value} onChange={this.handleChange} />
                        <button className='submit' onClick={this.handleChange}>
                            <FaSearch />
                        </button>
                        <MediaButton clicked={!!this.state.audio} icon={<FaMusic/>} handleClick={this.handleAudio}/>
                        <MediaButton clicked={!!this.state.image} icon={<FaImages/>} handleClick={this.handleImage}/>
                        <MediaButton clicked={!!this.state.video} icon={<FaFilm/>} handleClick={this.handleVideo}/>
                        <div className='years'>
                            <p>{this.state.year_start}</p>
                            <Range min={1920} defaultValue={[1900,2019]} max={2019} onChange={this.handleOnRange}/>
                            <p>{this.state.year_end}</p>
                        </div>
                    </form>
                </div>
            </header>
        );
    }
}

const mapDispatchToProps = { loadFromApi };
export const FilterContainer = withRouter(connect(null, mapDispatchToProps)(Filter));