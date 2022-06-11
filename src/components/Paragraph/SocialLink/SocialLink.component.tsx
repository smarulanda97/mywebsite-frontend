import Image from "next/image";

import { getImageProps } from "@/src/utilities";
import { ParagraphSocialLink as ParagraphSocialLink } from "@/models";

type Props = {
  paragraph: ParagraphSocialLink;
};

const SocialLink: React.FC<Props> = (props) => {
  const { paragraph } = props;

  return (
    <>
      <a href={paragraph.link.url} target="_blank" rel="noreferrer">
        {paragraph.mediaImage ? <Image {...getImageProps(paragraph.mediaImage.image)} /> : null}
      </a>
    </>
  );
};

export default SocialLink;
