import { LazyMotion } from 'framer-motion';
import {FC, PropsWithChildren} from "react";

// ----------------------------------------------------------------------

// eslint-disable-next-line import/extensions
const loadFeatures = () => import('./features.tsx').then((res) => res.default);

export const MotionLazyContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LazyMotion strict features={loadFeatures}>
      {children}
    </LazyMotion>
  );
}
