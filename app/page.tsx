import LanguagesCard from '@/components/LanguagesCard';
import MainContent from '@/components/MainContent';
import PersonalDataCard from '@/components/PersonalDataCard';
import ProfileCard from '@/components/ProfileCard';
import SkillsCard from '@/components/SkillsCard';

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <ProfileCard />
          {/* <CurriculumCard /> */}
          <PersonalDataCard />
          <SkillsCard />
          <LanguagesCard />
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-2">
          <MainContent />
        </div>
      </div>
    </div>
  );
}