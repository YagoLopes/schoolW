const TOKEN_KEY = '@token-user';
const ROLE_KEY = '@role-user';
const JOB_KEY = '@job-user';

export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;

export const isAdministrator = () => sessionStorage.getItem(ROLE_KEY) === '1';

export const setToken = token => {
 sessionStorage.setItem(TOKEN_KEY, token);
};
export const getToken = () => sessionStorage.getItem(TOKEN_KEY);

export const setRole = role => {
 sessionStorage.setItem(ROLE_KEY, role);
};
export const getRole = () => sessionStorage.getItem(ROLE_KEY);

export const setJob = job => {
 sessionStorage.setItem(JOB_KEY, job);
};
export const getJob = () => sessionStorage.getItem(JOB_KEY);

export const logout = () => {
 sessionStorage.removeItem(TOKEN_KEY);
 sessionStorage.removeItem(ROLE_KEY);
 sessionStorage.removeItem(JOB_KEY);
};
