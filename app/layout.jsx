import './globals.css';

export const metadata = {
  title: 'My Weather Webapp',
  description: 'Made with love by obit',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='max-w-lg justify-center items-center m-10'>
        {children}
      </body>
    </html>
  );
}
