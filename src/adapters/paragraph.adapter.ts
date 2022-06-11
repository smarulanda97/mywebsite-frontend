import {
  Paragraph,
  JsonApiParagraph,
  ParagraphPortfolioBanner,
  JsonApiParagraphPortfolioBanner,
  JsonApiParagraphSocialLink,
  ParagraphSocialLink,
  JsonApiParagraphSkillLink,
  ParagraphSkillLink,
} from "@/models";
import { adaptedFieldTextFormatted } from "@/adapters";
import { adaptedFieldLink, adaptedFieldMediaImage } from "./field.adapter";

/**
 * Returns an array of formatted paragraphs.
 *
 * @param {JsonApiParagraph[]} paragraphs
 * @returns {Paragraph[]}
 */
export const adaptedParagraphs = (paragraphs: JsonApiParagraph[]): Paragraph[] => {
  if (!paragraphs.length) {
    return [];
  }

  const formattedParagraphs = paragraphs.map((p) => {
    switch (p.type) {
      case "paragraph--portfolio_banner":
        return adaptedParagraphPorfolioBanner(p as JsonApiParagraphPortfolioBanner);
      case "paragraph--social_link":
        return adaptedParagraphSocialLink(p as JsonApiParagraphSocialLink);
      case "paragraph--skill_link":
        return adaptedParagraphSkillLink(p as JsonApiParagraphSkillLink);
      default:
        return adaptedParagraph(p);
    }
  });

  return formattedParagraphs;
};

/**
 * Returns a basic formatted paragraph (only id and type properties).
 *
 * @param {JsonApiParagraph} p
 * @returns {Paragraph}
 */
export const adaptedParagraph = (p: JsonApiParagraph): Paragraph => ({
  id: p.id,
  type: p.type,
});

/**
 * Returns an specific formatted for paragraph "paragraph--portfolio_banner"
 *
 * @param {JsonApiParagraphPortfolioBanner} p
 * @returns {ParagraphPortfolioBanner}
 */
export const adaptedParagraphPorfolioBanner = (
  p: JsonApiParagraphPortfolioBanner
): ParagraphPortfolioBanner => ({
  id: p.id,
  type: p.type,
  title: adaptedFieldTextFormatted(p.field_title),
  subtitle: p.field_subtitle ?? null,
  description: adaptedFieldTextFormatted(p.field_description),
  mediaImage: adaptedFieldMediaImage(p.field_media),
  socialLinks: Array.isArray(p.field_reference_list)
    ? adaptedParagraphs(p.field_reference_list)
    : [],
  skillLinks: Array.isArray(p.field_reference_list_secondary)
    ? adaptedParagraphs(p.field_reference_list_secondary)
    : [],
});

/**
 * Returns an specific formatted for paragraph "paragraph--social_link"
 *
 * @param {JsonApiParagraphSocialLink} p
 * @returns {ParagraphSocialLink}
 */
export const adaptedParagraphSocialLink = (p: JsonApiParagraphSocialLink): ParagraphSocialLink => ({
  id: p.id,
  type: p.type,
  link: adaptedFieldLink(p.field_link),
  mediaImage: adaptedFieldMediaImage(p.field_media),
});

/**
 * Returns an specific formatted for paragraph "paragraph--skill_link"
 *
 * @param {JsonApiParagraphSkillLink} p
 * @returns {ParagraphSkillLink}
 */
export const adaptedParagraphSkillLink = (p: JsonApiParagraphSkillLink): ParagraphSkillLink => ({
  id: p.id,
  type: p.type,
  link: adaptedFieldLink(p.field_link),
  mediaImage: adaptedFieldMediaImage(p.field_media),
});
