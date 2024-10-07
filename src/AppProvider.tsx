import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider as ReduxProvider } from 'react-redux';
import { ErrorFallback } from '@/components/errors';
import { store } from './store';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ReduxProvider store={store}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>{children}</HelmetProvider>
      </ErrorBoundary>
    </ReduxProvider>
  );
};
