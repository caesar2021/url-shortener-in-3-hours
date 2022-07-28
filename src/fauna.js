import { Client } from 'faunadb'

export default new Client({
	domain: import.meta.env.VITE_FAUNADB_DOMAIN,
	secret: import.meta.env.VITE_FAUNADB_SECRET
})