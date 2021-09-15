import { useMutation, useQuery } from "react-query";
import {
    getEvent,
    getEvents,
    getGalleries,
    getTeams,
    getYoutubeVideos,
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

export const useTeams = (id) => {
    return useQuery("event", async () => {
        const { data } = await getTeams();
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
};