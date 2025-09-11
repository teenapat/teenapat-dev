"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Briefcase, FolderOpen, GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../lib/i18n';
import ExperienceTab from './ExperienceTab';

export default function MainContent() {
  const { t } = useTranslation();

  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <Tabs defaultValue="experience" className="w-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">{t('profile.aboutMe')}</h2>
            <TabsList className="grid w-auto grid-cols-3">
              <TabsTrigger value="experience" className="flex items-center space-x-2">
                <Briefcase size={16} />
                <span>{t('profile.experience')}</span>
              </TabsTrigger>
              <TabsTrigger value="education" className="flex items-center space-x-2">
                <GraduationCap size={16} />
                <span>{t('profile.education')}</span>
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex items-center space-x-2">
                <FolderOpen size={16} />
                <span>{t('profile.projects')}</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('profile.about')}
            </p>
          </div>

          <TabsContent value="experience">
            <ExperienceTab />
          </TabsContent>

          <TabsContent value="education">
            <div className="text-center py-12">
              <GraduationCap size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
              <p className="text-gray-500 dark:text-gray-400">Education information would be displayed here.</p>
            </div>
          </TabsContent>

          <TabsContent value="projects">
            <div className="text-center py-12">
              <FolderOpen size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
              <p className="text-gray-500 dark:text-gray-400">Projects information would be displayed here.</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}