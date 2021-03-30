import axios from "axios";

// Creating a customize instance
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID -9P2IKSiE-I85HZ23yAySLjzD7xAWiZr3u3Es8EhaZM'
    }
});
