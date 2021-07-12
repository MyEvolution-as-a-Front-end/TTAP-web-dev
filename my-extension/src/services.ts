import axios from 'axios'

export const api = axios.create({
	baseURL: 'https://api.co2signal.com/v1/latest',
	withCredentials: true,
	headers: {
		'Acess-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
		'auth-token': '3f10239b15c9694b',
	},
})
