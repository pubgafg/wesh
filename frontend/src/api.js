const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const ADS = {
  GET_ALL: `${API_BASE}/ads`,
  CREATE: `${API_BASE}/ads`,
  GET_ONE: (id) => `${API_BASE}/ads/${id}`,
};

export const USERS = {
  REGISTER: `${API_BASE}/users/register`,
  LOGIN: `${API_BASE}/users/login`,
};

export const UPLOAD = {
  IMAGE: `${API_BASE}/upload/image`,
};
