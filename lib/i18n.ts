import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      profile: {
        name: 'Teenapat Rattanawong',
        title: 'Full Stack Developer with Practical DevOps & Automated Experience',
        about:
          'Experienced and adaptable Full-Stack Developer with expertise in delivering scalable, maintainable solutions across healthcare, finance, and internal tools. Skilled in both backend and frontend development, with proven success in modernizing legacy systems, enhancing CI/CD pipelines, and implementing automated testing for high-quality applications. Strong commitment to collaboration, continuous improvement, and creating secure, user-centered digital experiences.',
        curriculum: 'Curriculum',
        personalData: 'Personal Data',
        skills: 'Skills',
        languages: 'Languages',
        aboutMe: 'About me',
        experience: 'Experience',
        education: 'Education',
        projects: 'Projects',
        volunteerWork: 'Volunteer Work',
        email: 'Email Address',
        birthDate: 'Birth Date',
        age: 'Years',
        phone: 'Phone Number',
        workType: 'Work Type',
        nativeLanguage: 'Native Language',
        intermediate: 'Intermediate',
        darkMode: 'Dark Mode',
        language: 'Language',
        showingResults: 'Showing 1 to 2 of 2 results',
      },
    },
  },
  th: {
    translation: {
      profile: {
        name: 'ธีนพัฒน์ รัตนวงศ์',
        title: 'นักพัฒนา Full Stack กับประสบการณ์ DevOps และประสบการณ์ Automated',
        about:
          'Full-Stack Developer ที่มีประสบการณ์และปรับตัวได้ดี ทำงานได้ทั้งฝั่ง Frontend และ Backend มีผลงานพัฒนาและปรับปรุงระบบในหลายด้าน เช่น Healthcare, Finance และ Internal Tools เคยช่วยปรับระบบเก่าให้เป็นระบบใหม่ที่ทันสมัย ปรับปรุง CI/CD pipeline และทำ Automated Testing เพื่อให้แอปคุณภาพดีขึ้น ชอบทำงานเป็นทีม พัฒนาตัวเองต่อเนื่อง และโฟกัสการสร้าง Digital Experience ที่ปลอดภัยและใช้งานง่ายสำหรับผู้ใช้',
        curriculum: 'ประวัติการศึกษา',
        personalData: 'ข้อมูลส่วนตัว',
        skills: 'ทักษะ',
        languages: 'ภาษา',
        aboutMe: 'เกี่ยวกับฉัน',
        experience: 'ประสบการณ์',
        education: 'การศึกษา',
        projects: 'โครงการ',
        volunteerWork: 'งานอาสาสมัคร',
        email: 'ที่อยู่อีเมล',
        birthDate: 'วันเกิด',
        age: 'ปี',
        phone: 'หมายเลขโทรศัพท์',
        workType: 'ประเภทงาน',
        nativeLanguage: 'ภาษาแม่',
        intermediate: 'ระดับกลาง',
        darkMode: 'โหมดมืด',
        language: 'ภาษา',
        showingResults: 'แสดง 1 ถึง 2 จาก 2 ผลลัพธ์',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
