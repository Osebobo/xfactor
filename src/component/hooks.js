import { useMutation, useQuery } from "react-query";
import {
    getBanners,
    getEvent,
    getEvents,
    getGalleries,
    getTeams,
    getTeam,
    getYoutubeVideos,
    sendBooking,
    sendContact,
} from "./api";

export const useEvents = () => {
    return useQuery("events", async () => {
        const { data } = await getEvents();
        return data;
    });
};
export const useEvent = (id) => {
    return useQuery("event", async () => {
        const { data } = await getEvent(id);
        return data;
    });
};

export const useTeams = () => {
    return useQuery("teams", async () => {
        const { data } = await getTeams();
        return data;
    });
};

export const useTeam = (id) => {
    return useQuery("team", async () => {
        const { data } = await getTeam(id);
        return data;
    });
};

export const useGalleries = (id) => {
    return useQuery("gallery", async () => {
        const { data } = await getGalleries();
        return data;
    });
};

export const useYoutubeVideos = (id) => {
    return useQuery("youtube", async () => {
        const { data } = await getYoutubeVideos();
        return data;
    });
};


export const useSendContact = () => {
    return useMutation("contactUs", async (param) => {
        const { data } = await sendContact(param);
        return data;
    });
}

export const useSendBooking = () => {
    return useMutation("booking", async (param) => {
        const { data } = await sendBooking(param);
        return data;
    });
};
export const useBanners = () => {
    return useQuery("banners", async () => {
        const { data } = await getBanners();
        return data;
    });
};