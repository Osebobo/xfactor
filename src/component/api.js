import axios from "axios";

const BASE_URL = "https://api.xfactorproductions.ng"

export const getEvents = () => {
    return new Promise((res, rej) => {
          axios.get(`${BASE_URL}/wp-json/wp/v2/event`).then(response => {
            return res(response);
        }).catch(err => {
            return rej("An error occurred")
        })
    })
}


export const getEvent = (id) => {
    return new Promise((res, rej) => {
          axios.get(`${BASE_URL}/wp-json/wp/v2/event/${id}`).then(response => {
            return res(response);
        }).catch(err => {
            return rej("An error occurred")
        })
    })
}

export const getTeams = () => {
    return new Promise((res, rej) => {
        axios.get(`${BASE_URL}/wp-json/wp/v2/team`).then(response => {
            return res(response);
        }).catch(err => {
            return rej("An error occurred")
        })
    })
}

export const getGalleries = () => {
    return new Promise((res, rej) => {
        axios.get(`${BASE_URL}/wp-json/wp/v2/gallery`).then(response => {
            return res(response);
        }).catch(err => {
            return rej("An error occurred")
        })
    })
}
 
export const sendContact = (data) => {
    // const formData = new FormData();
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return new Promise((res, rej) => {
        axios.get(`${BASE_URL}/wp-json/contact-form-7/v1/contact-forms/70/feedback`, {
            ...data
        }, config ).then(response => {
            return res(response);
        }).catch(err => {
            return rej("An error occurred")
        })
    })
}

export const sendBooking = (data) => {
    // const formData = new FormData();
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return new Promise((res, rej) => {
        axios.get(`${BASE_URL}/wp-json/contact-form-7/v1/contact-forms/69/feedback`, {
            ...data
        }, config ).then(response => {
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

export const getBanners = () => {
    return new Promise((res, rej) => {
        axios.get(`${BASE_URL}/wp-json/wp/v2/banners`)
            .then(response => {
                return res(response);
            }).catch(err => {
                return rej("An error occurred")
            })
    })
}

