import axiosWithAuth from '../helpers/axiosWithAuth';

export const getColors = () => {
	return axiosWithAuth().get('/colors')

};