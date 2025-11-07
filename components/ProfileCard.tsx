"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Instagram,
  Languages,
  Linkedin,
  Monitor,
  Moon,
  Sun,
  Twitter
} from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import '../lib/i18n';

export default function ProfileCard() {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="relative w-16 h-16 flex-shrink-0">
            <Image
              src="/images/profile-me.jpg"
              alt="Teenapat Rattanawong"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 truncate">
              {t('profile.name')}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {t('profile.title')}
            </p>
            
            <div className="flex space-x-2">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="https://www.linkedin.com/in/teenapat-rattanawong/" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-gray-400">
                <span className="text-lg">⋯</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => setTheme('light')} className="flex items-center space-x-2">
                <Sun size={16} />
                <span>Light</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')} className="flex items-center space-x-2">
                <Moon size={16} />
                <span>Dark</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')} className="flex items-center space-x-2">
                <Monitor size={16} />
                <span>System</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => changeLanguage('en')} className="flex items-center space-x-2">
                <Languages size={16} />
                <span>English</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('th')} className="flex items-center space-x-2">
                <Languages size={16} />
                <span>ไทย</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
}