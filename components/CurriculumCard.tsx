"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../lib/i18n';

export default function CurriculumCard() {
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{t('profile.curriculum')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
              <span className="text-xs">📄</span>
            </div>
            <div>
              <p className="font-medium text-sm">{t('profile.name')}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">PDF & DOC</p>
            </div>
          </div>
          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
            <Download size={14} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}