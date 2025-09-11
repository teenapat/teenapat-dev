"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { languages } from '@/data/profile';
import { useTranslation } from 'react-i18next';
import '../lib/i18n';

export default function LanguagesCard() {
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{t('profile.languages')}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {languages.map((language, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <div className="w-full h-full bg-blue-600 flex items-center justify-center">
                <span className="text-white text-xs font-bold">{language.flag}</span>
              </div>
            </div>
            <div>
              <p className="font-medium text-sm">{language.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{t(`profile.${language.level}`)}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}