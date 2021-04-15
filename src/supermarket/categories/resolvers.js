import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;


const resolvers = {
	Query: {
		allReports: (_) =>
			generalRequest(`${URL}`, 'GET'),
		reportById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	

	},
	Mutation: {
		createReport: (_, { Report }) =>
			generalRequest(`${URL}`, 'POST', Report),
		updateReport: (_, { id, Report }) =>
			generalRequest(`${URL}/${id}`, 'PUT', Report),
		deleteReport: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE'),
	
	}
};

export default resolvers;
