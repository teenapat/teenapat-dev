"use client";

import { Card, CardContent } from '@/components/ui/card';
import { projects } from '@/data/projects';
import { AlertCircle, CheckCircle, Clock, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../lib/i18n';
import Pagination from './Pagination';

export default function ProjectsTab() {
  const { t } = useTranslation();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
  
    const totalPages = Math.ceil(projects.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);
  

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'planned':
        return <AlertCircle className="w-4 h-4 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">{t('profile.projects')}</h3>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {projects.length} projects
        </div>
      </div>

      <div className="space-y-6">
        {currentProjects.map((project) => (
        <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {project.name}
                </h4>
                {getStatusIcon(project.status)}
              </div>

              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                    title="Live Demo"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                    title="Source Code"
                  >
                    <Github size={16} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-3">
              {project.startDate} {project.endDate ? `– ${project.endDate}` : ''}
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            <div>
              {/* <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                🛠️ Tech Stack
              </p> */}
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, index) => (
                  <a
                    key={index}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={tech.name}
                    className="flex items-center justify-center w-8 h-8 rounded hover:scale-110 transition"
                  >
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={24}
                      height={24}
                    />
                  </a>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        ))}
      </div>

     <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}