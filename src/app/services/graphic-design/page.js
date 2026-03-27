'use client';
import ServiceDetailPage from '../[slug]/page';

// This page exists because the graphic-design directory has sub-service pages.
// Without it, Next.js cannot resolve /services/graphic-design since the static
// directory takes precedence over the dynamic [slug] route.
export default function GraphicDesignPage() {
  return <ServiceDetailPage slugOverride="graphic-design" />;
}
