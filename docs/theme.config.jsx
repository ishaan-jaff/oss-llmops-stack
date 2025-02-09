import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
export default {
  logo: <span>OSS LLMOps Stack</span>,
  project: {
    link: "https://github.com/langfuse/oss-llmops-stack",
  },
  docsRepositoryBase:
    "https://github.com/langfuse/oss-llmops-stack/tree/main/docs",

  head() {
    const { url } = useRouter();
    const { frontMatter } = useConfig();

    const title = frontMatter.title
      ? `${frontMatter.title} - The OSS LLMOps Stack`
      : "The OSS LLMOps Stack";
    const description = frontMatter.description;

    return (
      <>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </>
    );
  },
  gitTimestamp: null,
  footer: {
    content: "The OSS LLMOps Stack",
  },
  faviconGlyph: "⚡️",
  // ... other theme options
};
