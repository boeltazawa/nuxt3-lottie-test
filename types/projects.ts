import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type Projects = {
  title?: string;
  subject?: {
    ruby: string
    isTitleAnimation: Boolean
    lang: MicroCMSListContent
    animationData: {
      url: string
    }
  };
};