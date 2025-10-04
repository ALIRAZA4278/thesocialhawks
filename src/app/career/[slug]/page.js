import { notFound } from 'next/navigation';
import { getJobBySlug, jobsData } from '../../data/jobs';
import JobApplication from '../../Components/JobApplication';

// Generate static params for all job slugs
export async function generateStaticParams() {
  return jobsData.map((job) => ({
    slug: job.slug,
  }));
}

// Generate metadata for each job page
export async function generateMetadata({ params }) {
  const job = getJobBySlug(params.slug);
  
  if (!job) {
    return {
      title: 'Job Not Found - TheSocialHawks',
    };
  }

  return {
    title: `${job.title} - Career at TheSocialHawks`,
    description: `Join TheSocialHawks as a ${job.title}. ${job.description} Apply now for this ${job.type} position in ${job.location}.`,
    keywords: `${job.title}, ${job.department}, career, job, TheSocialHawks, ${job.location}`,
  };
}

export default function JobPage({ params }) {
  const job = getJobBySlug(params.slug);

  if (!job) {
    notFound();
  }

  return <JobApplication job={job} />;
}