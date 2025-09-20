import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Kanit } from 'next/font/google';
import './globals.css';

const kanit = Kanit({
  subsets: ['thai'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

export const metadata = {
  title: "teenapat",
  description: "teenapat rattanawong's personal portfolio website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}