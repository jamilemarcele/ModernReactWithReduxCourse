import axios from 'axios';

const KEY = 'AIzaSyBCYCET2XiEJVeLwUQyGS2xohRWj3g-MH8';

export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: KEY
    }
});
