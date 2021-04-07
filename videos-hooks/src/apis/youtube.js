import axios from 'axios';

const KEY = process.env.REACT_APP_SECRET_NAME;

export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: KEY
    }
});
