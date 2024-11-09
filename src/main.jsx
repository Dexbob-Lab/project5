import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App.jsx';
import './styles/index.scss';

createRoot(document.getElementById('root')).render(
	<QueryClientProvider client={new QueryClient()}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
		{/* <ReactQueryDevtools /> */}
	</QueryClientProvider>
);
