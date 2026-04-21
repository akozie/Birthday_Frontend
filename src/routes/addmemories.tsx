import { createFileRoute } from '@tanstack/react-router';
import AddMemories from '@/lib/pages/addmemories';

export const Route = createFileRoute('/addmemories')({
  component: AddMemories,
});
