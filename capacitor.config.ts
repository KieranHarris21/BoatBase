import type { CapacitorConfig } from '@capacitor/cli';
import { KeyboardResize } from '@capacitor/keyboard';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'BoatBase',
  webDir: 'dist',
  plugins: {
    Keyboard: {
      resize: KeyboardResize.None,
    }
  }
};

export default config;
