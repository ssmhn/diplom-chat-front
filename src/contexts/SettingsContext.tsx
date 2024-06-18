// provider === component
import {createContext, FC, PropsWithChildren, useEffect} from "react";
import {DefaultSettings, defaultSettings} from "../config";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {
  defaultPreset,
  colorPresets,
  getColorPresets, Preset, ColorPresets
} from "../utils/getColorPresets";

const initialState = {
  ...defaultSettings,

  // Mode
  onToggleMode: () => {},
  onChangeMode: () => {},

  // Direction
  onToggleDirection: () => {},
  onChangeDirection: () => {},
  onChangeDirectionByLang: () => {},

  // Layout
  onToggleLayout: () => {},
  onChangeLayout: () => {},

  // Contrast
  onToggleContrast: () => {},
  onChangeContrast: () => {},

  // Color
  onChangeColor: () => {},
  setColor: defaultPreset,
  colorOption: [],

  // Stretch
  onToggleStretch: () => {},

  // Reset
  onResetSetting: () => {},
};

type Context = {
  onToggleMode: () => void,
  onChangeMode: (event: any) => void,

  // Direction
  onToggleDirection: () => void,
  onChangeDirection: (event: any) => void,
  onChangeDirectionByLang: (lang: string) => void,

  // Layout
  onToggleLayout: () => void,
  onChangeLayout: (event: any) => void,

  // Contrast
  onToggleContrast: () => void,
  onChangeContrast: (event: any) => void,

  // Color
  onChangeColor: (event: any) => void,
  setColor: Preset,
  colorOption: {name: string, value: string}[],

  // Stretch
  onToggleStretch: () => void,

  // Reset
  onResetSetting: () => void,
} & DefaultSettings

const SettingsContext = createContext<Context>(initialState);

const SettingsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [settings, setSettings] = useLocalStorage("settings", {
    themeMode: initialState.themeMode,
    themeLayout: initialState.themeLayout,
    themeStretch: initialState.themeStretch,
    themeContrast: initialState.themeContrast,
    themeDirection: initialState.themeDirection,
    themeColorPresets: initialState.themeColorPresets,
  });

  const isArabic = localStorage.getItem("i18nextLng") === "ar";

  useEffect(() => {
    if (isArabic) {
      onChangeDirectionByLang("ar");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isArabic]);

  // Mode

  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === "light" ? "dark" : "light",
    });
  };

  const onChangeMode = (event: any) => {
    setSettings({
      ...settings,
      themeMode: event.target.value as string,
    });
  };

  // Direction

  const onToggleDirection = () => {
    setSettings({
      ...settings,
      themeDirection: settings.themeDirection === "rtl" ? "ltr" : "rtl",
    });
  };

  const onChangeDirection = (event: any) => {
    setSettings({
      ...settings,
      themeDirection: event.target.value as string,
    });
  };

  const onChangeDirectionByLang = (lang: string) => {
    setSettings({
      ...settings,
      themeDirection: lang === "ar" ? "rtl" : "ltr",
    });
  };

  // Layout

  const onToggleLayout = () => {
    setSettings({
      ...settings,
      themeLayout: settings.themeLayout === "vertical" ? "horizontal" : "vertical",
    });
  };

  const onChangeLayout = (event: any) => {
    setSettings({
      ...settings,
      themeLayout: event.target.value as string,
    });
  };

  // Contrast

  const onToggleContrast = () => {
    setSettings({
      ...settings,
      themeContrast: settings.themeContrast === "default" ? "bold" : "default",
    });
  };

  const onChangeContrast = (event: any) => {
    setSettings({
      ...settings,
      themeContrast: event.target.value as string,
    });
  };

  // Color

  const onChangeColor = (event: any) => {
    setSettings({
      ...settings,
      themeColorPresets: event.target.value as keyof ColorPresets,
    });
  };

  // Stretch

  const onToggleStretch = () => {
    setSettings({
      ...settings,
      themeStretch: !settings.themeStretch,
    });
  };

  // Reset

  const onResetSetting = () => {
    setSettings({
      themeMode: initialState.themeMode,
      themeLayout: initialState.themeLayout,
      themeStretch: initialState.themeStretch,
      themeContrast: initialState.themeContrast,
      themeDirection: initialState.themeDirection,
      themeColorPresets: initialState.themeColorPresets,
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings, // Mode
        onToggleMode,
        onChangeMode,

        // Direction
        onToggleDirection,
        onChangeDirection,
        onChangeDirectionByLang,

        // Layout
        onToggleLayout,
        onChangeLayout,

        // Contrast
        onChangeContrast,
        onToggleContrast,

        // Stretch
        onToggleStretch,

        // Color
        onChangeColor,
        setColor: getColorPresets(settings.themeColorPresets),
        colorOption: colorPresets.map((color) => ({
          name: color.name,
          value: color.main,
        })),

        // Reset
        onResetSetting,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export {SettingsContext};

export default SettingsProvider;