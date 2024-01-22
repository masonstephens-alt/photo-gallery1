import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'photo.gallery1',
  appName: 'photo-gallery1',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
