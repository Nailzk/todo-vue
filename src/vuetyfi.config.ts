import {VuetifyOptions} from "vuetify";

export const VuetyfiConfig: VuetifyOptions = {
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: "#EB7571",
                    secondary: "#ADB4B5",
                    purple: "#6665E4"
                }
            },
        }
    },
    icons: {
        defaultSet: 'mdi',
    },
}