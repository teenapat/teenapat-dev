"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { personalData } from '@/data/profile';
import { Calendar, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../lib/i18n';

export default function PersonalDataCard() {
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{t('profile.personalData')}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-3">
          <Mail className="w-4 h-4 text-gray-400" />
          <div>
            <p className="font-medium text-sm">{personalData.email}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{t('profile.email')}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Calendar className="w-4 h-4 text-gray-400" />
          <div>
            <p className="font-medium text-sm">{personalData.birthDate}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{personalData.age} {t('profile.age')}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Phone className="w-4 h-4 text-gray-400" />
          <div>
            <p className="font-medium text-sm">{personalData.phone}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{t('profile.phone')}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <MapPin className="w-4 h-4 text-gray-400" />
          <div>
            <p className="font-medium text-sm">{personalData.workType}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{t('profile.workType')}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}