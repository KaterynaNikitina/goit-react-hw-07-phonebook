import axios from "axios";

const BASE_URL = 'https://64ce8a470c01d81da3eee9f1.mockapi.io';

export const fetchContacts = async () => {
    const { data } = await axios.get(`${BASE_URL}/contacts`);
    return data;
};

export const deleteContacts = async (id) => {
    const { data } = await axios.delete(`${BASE_URL}/contacts/${id}`);
    return data;
}

export const addContacts = async (contact) => {
    const { data } = await axios.post(`${BASE_URL}/contacts`, {...contact});
    return data;
}
