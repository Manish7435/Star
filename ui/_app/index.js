import React from 'react';

import Layout from '@/ui/Layout'

function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default App;