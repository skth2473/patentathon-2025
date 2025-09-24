import Navigation from '../../components/Navigation';
import ClubShowcase from '../../components/ClubShowcase';
import Footer from '../../components/Footer';

export default function ClubPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <ClubShowcase />
      <Footer />
    </div>
  );
}
