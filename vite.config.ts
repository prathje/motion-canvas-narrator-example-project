import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';
import ffmpeg from '@motion-canvas/ffmpeg';

import { motionCanvasCachePlugin } from 'motion-canvas-cache/vite-plugin';

export default defineConfig({
  plugins: [
    motionCanvas(),
    ffmpeg(),
    // Add the narrator plugin for server-side audio caching
    motionCanvasCachePlugin()
  ]
});