import { createFileRoute } from '@tanstack/react-router';

import Guestbook from '@/lib/pages/guestbook';

export const Route = createFileRoute('/guestbook')({
  component: Guestbook,
});
