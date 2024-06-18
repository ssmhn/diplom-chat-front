import {SettingsDrawer} from './drawer';
import {ThemeContrast} from './ThemeContrast';
import {ThemeRtlLayout} from './ThemeRtlLayout';
import {ThemeColorPresets} from './ThemeColorPresets';
import {ThemeLocalization} from './ThemeLocalization';
import {FC, PropsWithChildren} from "react";

export const ThemeSettings: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeColorPresets>
      <ThemeContrast>
        <ThemeLocalization>
          <ThemeRtlLayout>
            {children}
            <SettingsDrawer />
          </ThemeRtlLayout>
        </ThemeLocalization>
      </ThemeContrast>
    </ThemeColorPresets>
  );
}
