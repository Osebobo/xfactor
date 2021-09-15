import axios from "axios";

export const getEvents = () => {
    return new Promise((res, rej) => {
        axios.get('https://api.platinumjs.com/wp/wp-json/wp/v2/event').then(response => {
            return res(response);
        }).catch(err => {
            return rej("An error occurred")
        })
    })
}

export const getEvent = (id) => {
    return new Promise((res, rej) => {
        axios.get(`https://api.platinumjs.com/wp/wp-json/wp/v2/event/${id}`).then(response => {
            return res(response);
        }).catch(err => {
            return rej("An error occurred")
        })
    })
}

export const getTeams = () => {
    return new Promise((res, rej) => {
        axios.get(`http://api.platinumjs.com/wp/wp-json/wp/v2/teams`).then(response => {
            return res(response);
        }).catch(err => {
            return rej("An error occurred")
        })
    })
}

export const getGalleries = () => {
    return new Promise((res, rej) => {
        axios.get(`https://api.platinumjs.com/wp/wp-json/wp/v2/gallery`).then(response => {
            return res(response);
        }).catch(err => {
            return rej("An error occurred")
        })
    })
}


export const sendContact = (data) => {
    return new Promise((res, rej) => {
        axios.post("http://api.platinumjs.com/wp/wp-json/contact-form-7/v1/contact-forms/32/feedback", {
            ...data
        }).then(response => {
            return res(response);
        }).catch(err => {
            return rej("An error occurred")
        })
    })
}

export const getYoutubeVideos = (data) => {
    return new Promise((res, rej) => {
        axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCmMylJooYnZJVztgbDxsznA&key=AIzaSyAWa6OqGAF6FfREjPCaeijNTQxQWsoLecA")
            .then(response => {
                return res(response);
            }).catch(err => {
                return rej("An error occurred")
            })
    })
}

