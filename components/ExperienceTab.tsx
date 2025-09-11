"use client";

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { experiences, volunteerWork } from '@/data/profile';
import { Briefcase, Calendar, Heart, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../lib/i18n';

export default function ExperienceTab() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">{t('profile.experience')}</h3>
        </div>
        
        {experiences.map((exp, index) => (
          <div key={exp.id} className="border-l-2 border-gray-200 dark:border-gray-700 pl-6 pb-6 relative">
            <div className={`absolute -left-2 top-0 w-4 h-4 ${exp.logoColor} rounded-full flex items-center justify-center`}>
              <span className="text-white text-xs font-bold">{exp.logo}</span>
            </div>
            
            <div className="flex items-start justify-between mb-2">
              <div>
                <h4 className="font-bold text-lg">{exp.company}</h4>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span className="flex items-center space-x-1">
                    <Briefcase size={14} />
                    <span>{exp.position}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{exp.startDate} - {exp.endDate}</span>
                  </span>
                </div>
              </div>
              <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                {exp.type}
              </Badge>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}

        <div className="text-center py-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">{t('profile.showingResults')}</p>
          <div className="mt-2">
            <Button variant="outline" size="sm" className="w-8 h-8 p-0">1</Button>
          </div>
        </div>
      </div>

      {/* Volunteer Work Section */}
      <div className="border-t pt-6">
        <h3 className="text-xl font-bold mb-4">{t('profile.volunteerWork')}</h3>
        
        {volunteerWork.map((work) => (
          <div key={work.id} className="border-l-2 border-gray-200 dark:border-gray-700 pl-6 relative">
            <div className={`absolute -left-2 top-0 w-4 h-4 ${work.logoColor} rounded-full flex items-center justify-center`}>
              <span className="text-white text-xs font-bold">{work.logo}</span>
            </div>
            
            <div className="flex items-start justify-between mb-2">
              <div>
                <h4 className="font-bold text-lg">{work.position}</h4>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span className="flex items-center space-x-1">
                    <Heart size={14} />
                    <span>{work.organization}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MapPin size={14} />
                    <span>{work.location}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{work.startDate} - {work.endDate}</span>
                  </span>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                {work.type}
              </Badge>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {work.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}