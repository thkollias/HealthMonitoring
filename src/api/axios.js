import axios from "axios";
import IP_ADDRESS from "../IpAddress"

/** Axios Instance containing the base url */
export const baseUrlInstance = axios.create({
  baseURL: `${IP_ADDRESS}`, 
});