import Navigation from '../components/Navigation';
import Header from '../components/Header';
import InnovationTracks from '../components/InnovationTracks';
import EventTimeline from '../components/EventTimeline';
import ExpertMentors from '../components/ExpertMentors';
import CommunityPartners from '../components/CommunityPartners';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { Club } from 'lucide-react';
import StudentCoordinators from '@/components/StudentCoordinators';
import ClubShowcase from '@/components/ClubShowcase';
// import ClubShowcase from '@/components/ClubShowcase';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Header />
      <InnovationTracks />
      <EventTimeline />
      <ExpertMentors />
      <StudentCoordinators />
      <CommunityPartners />
      <FAQ />
      <ClubShowcase />
      <Footer />
    </div> 
  );
}
