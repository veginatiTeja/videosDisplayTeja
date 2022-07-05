import {Component} from 'react'
import {BiSearch} from 'react-icons/bi'
import ReactPlayer from 'react-player'
import './index.css'

const videoLists = 
[
  {
      "title": "Campfire Embers",
      "URL": "https://d262gd3sdzodff.cloudfront.net/2ebf5c04-6beb-4486-948f-4c044a27d994/mp4/Campfire_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4",
      "tags": ["Ember","Fire","Log"]
  },
  {
      "title": "Shuttle Launch",
      "URL": "https://d262gd3sdzodff.cloudfront.net/15dc8353-5237-48c7-a021-b498851a844c/mp4/LaunchingOfRocket_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4",
      "tags": ["Space","Fire","Spark"]
  },
  {
      "title": "Smoke in the forest",
      "URL": "https://d262gd3sdzodff.cloudfront.net/c85ac563-c092-41d4-938a-c61d2390ff56/mp4/Smoke_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4",
      "tags": ["Smoke","Tree"]
  },
  {
      "title": "Cars Drifting",
      "URL": "https://d262gd3sdzodff.cloudfront.net/e79c0f25-85cf-4ade-b9b6-ef9d2456222b/mp4/CarDriftRacing_Mp4_Avc_Aac_16x9_1280x720p_24Hz_8.5Mbps_qvbr.mp4",
      "tags": ["Car","Track","Drifting"]
  },
  {
      "title": "Home Streight",
      "URL": "https://d262gd3sdzodff.cloudfront.net/88119a33-e117-42d1-9e9b-104dfb7282b9/mp4/Carracing_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4",
      "tags": ["Car","Racing","Track"]
  },
  {
      "title": "Cycle Race",
      "URL": "https://d262gd3sdzodff.cloudfront.net/f0e50064-c689-4a2f-9cc4-0ff9e6ddfb81/mp4/Cyclerace1_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4",
      "tags": ["Bike","Racing","Road"]
  },
  {
      "title": "Ice on the tree",
      "URL": "https://d262gd3sdzodff.cloudfront.net/d7a6a3fe-85b4-4074-ad40-e29ddca34035/mp4/IceBranches_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4",
      "tags": ["Tree","Ice","Snow"]
  },
  {
      "title": "Ice on the river",
      "URL": "https://d262gd3sdzodff.cloudfront.net/ad599d83-471f-42bc-8822-8c5b598cb4e0/mp4/IceFloating_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4",
      "tags": ["Ice","River","Snow"]
  },
  {
      "title": "Glacier Melting",
      "URL": "https://d262gd3sdzodff.cloudfront.net/debe0e59-f65c-4aeb-8d4e-788d20090825/mp4/IceWater_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4",
      "tags": ["Ice","River"]
  }
]


class VideoList extends Component {

    state = {
        searchInput:'',
        selectValue: videoLists[0].title,
        videoListsData: []
    }

    onChangeSearchInput = (event) => {
        const {searchInput,videoListsData} = this.state
        this.setState({searchInput: event.target.value})
        const videoUrlSearch = videoListsData.filter(eachVideo => eachVideo.title === searchInput)
        console.log(videoUrlSearch)
        this.setState({videoListsData: videoUrlSearch})

    }

    onSelectDropDown = event => {
        this.setState({selectValue: event.target.value})
        console.log(this.state.selectValue)
    }
    
    selectVideo = () => {
        const {selectValue} = this.state
        const videoUrl = videoLists.find(eachVideo => { return eachVideo.title === selectValue })
         const {URL, tags} = videoUrl
        
         return (
            <>
            <ReactPlayer url={URL} controls width={800} height={600} className="video-url"/>
            <p className='tags'>{tags.join(" and ")}</p>
            </>
         )
       
    }

    renderListOfVideos = () => {
        const {selectValue,videoListsData} = this.state
        
        return (
            <select onChange={this.onSelectDropDown}  value={selectValue}  className="select-dropdown" >
                {videoLists.map(eachVideo => <option  value={eachVideo.title} key={eachVideo.title} >{eachVideo.title}</option>)}
            </select>
        )
    }

    render() {
         const {searchInput} = this.state
        return (
            <div className='app-container'>
              <div className='responsive-container'>
                 <div className='search-input-container'>
                   <input type="search" value={searchInput} className="search-input" placeholder='Search Video' onChange={this.onChangeSearchInput}/>
                   <BiSearch className='search-icon'/>
                 </div>
                 <div className='videos-container'>
                      {this.renderListOfVideos()}
                  </div>
              </div>
              <div className='display-selected-video'>
               
                {this.selectVideo()}
              </div>     
            </div>
        )
    }
}
export default VideoList