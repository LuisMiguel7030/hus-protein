import axios from "axios";

export const getProteinProducts = () => axios.get('/api/products');
