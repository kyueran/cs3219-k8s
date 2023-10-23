import { ReactNode } from 'react';
import Navbar from '@/components/navBar/NavBar';

export default function MatchingLayout({ children }: { children: ReactNode }) {
  return <Navbar>{children}</Navbar>;
}
