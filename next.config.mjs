// Importa o plugin necessário do pacote @vanilla-extract/next-plugin
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

// Cria uma instância do plugin do Vanilla Extract
const withVanillaExtract = createVanillaExtractPlugin();

// Define as configurações do Next.js
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    if (dev) {
      // Se estiver em ambiente de desenvolvimento, configuramos as opções de watch
      config.watchOptions = {
        followSymlinks: true,
      };

      // Modifica os managedPaths para incluir tanto @vanilla-extract quanto @react-three/drei
      config.snapshot.managedPaths = [
        ...config.snapshot.managedPaths,
        /^(.+?[\\/]node_modules[\\/](?!(@react-three[\\/]drei))(@.+?[\\/])?.+?)[\\/]/,
      ];
    }

    return config;
  },
};

// Aplica as configurações do Vanilla Extract ao nextConfig
export default withVanillaExtract(nextConfig);
