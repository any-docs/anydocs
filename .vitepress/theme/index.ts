import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';

// Define your global function
const InteractiveExample = (name: string) => {
    //alert(`Hello, ${name}!`);
};

const HTTPHeader = () => {}
const glossary = () => {}

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        // Register the function globally on the Vue application instance
        app.config.globalProperties.InteractiveExample = InteractiveExample;
        app.config.globalProperties.httpheader = HTTPHeader;
        app.config.globalProperties.HTTPHeader = HTTPHeader;
        app.config.globalProperties.Glossary = glossary;
        app.config.globalProperties.glossary = glossary;
        app.config.globalProperties.domxref = glossary;
        app.config.globalProperties.HTTPMethod = glossary;
        app.config.globalProperties.HTMLElement = glossary;
        app.config.globalProperties.htmlelement = glossary;
        app.config.globalProperties.EmbedLiveSample = glossary;
        app.config.globalProperties.CSSxRef = glossary;
        app.config.globalProperties.RFC = glossary;
        app.config.globalProperties.DOMxRef = glossary;
        app.config.globalProperties.cssxref = glossary;
        app.config.globalProperties.EmbedGHLiveSample = glossary;

        // You could also register global components here
        // app.component('MyGlobalComponent', MyGlobalComponent);
    }
} satisfies Theme;
