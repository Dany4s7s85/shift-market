import { useState, useEffect, useMemo } from 'react';
import { createContextHook } from 'use-context-hook';

const context = {};

export const LoadingContext = createContextHook(context);

export function LoadingContextProvider(props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    // Cancel the timer while unmounting
    return () => clearTimeout(timer);
  }, []);

  const contextValues = useMemo(
    () => ({
      isLoading: loading,
    }),
    [],
  );

  return <LoadingContext.Provider value={contextValues}>{props.children}</LoadingContext.Provider>;
}
