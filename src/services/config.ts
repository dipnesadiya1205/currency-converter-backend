// Get host details of micro service apps
export const HOST = () => {
	const COINGECKO = process.env.COINGECKO

	return {
		COINGECKO
	}
}

export const COINGECKO_SERVICE = {
	GET_EXCHANGE_RATE: '/api/v3/exchange_rates'
}
