'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { Suspense } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <ChakraProvider>{children}</ChakraProvider>
    </Suspense>
  );
}
