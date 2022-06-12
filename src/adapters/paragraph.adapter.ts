import { adaptedFieldTextFormatted } from "@/adapters";
import { adaptedFieldLink, adaptedFieldMediaImage } from "./field.adapter";
import {
  JsonApiParagraph,
  JsonApiParagraphSkillLink,
  JsonApiParagraphSocialLink,
  JsonApiParagraphPortfolioBanner,
  Paragraph,
  ParagraphSkillLink,
  ParagraphSocialLink,
  ParagraphPortfolioBanner,
} from "@/models";

/**
 * This adapter receives an array of Paragraph entity object from JSON:API
 * and returns an adapted object (clean up useless properties)
 * of type array Paragraph.
 *
 * @param {JsonApiParagraph[]} paragraphs
 * @returns {Paragraph[]}
 */
export const adaptedParagraphs = (paragraphs: JsonApiParagraph[]): Paragraph[] => {
  if (!paragraphs.length) {
    return [];
  }

  return paragraphs.map((p: JsonApiParagraph) => {
    switch (p.type) {
      case "paragraph--portfolio_banner":
        return adaptedParagraphPortfolioBanner(p as JsonApiParagraphPortfolioBanner);
      case "paragraph--social_link":
        return adaptedParagraphSocialLink(p as JsonApiParagraphSocialLink);
      case "paragraph--skill_link":
        return adaptedParagraphSkillLink(p as JsonApiParagraphSkillLink);
      default:
        return adaptedParagraph(p);
    }
  });
};

/**
 * This adapter receives an object of Paragraph entity from JSON:API
 * and returns an adapted object (clean up useless properties)
 * of type Paragraph.
 *
 * @param {JsonApiParagraph} p
 * @returns {Paragraph}
 */
export const adaptedParagraph = (p: JsonApiParagraph): Paragraph => ({
  id: p.id,
  type: p.type,
});

/**
 * This adapter receives an object of Paragraph Portfolio Banner (bundle) of entity Paragraph
 * from JSON:API and returns an adapted object (clean up useless properties)
 * of type ParagraphPortfolioBanner.
 *
 * @param {JsonApiParagraphPortfolioBanner} p
 * @returns {ParagraphPortfolioBanner}
 */
export const adaptedParagraphPortfolioBanner = (
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
 * This adapter receives an object of Paragraph Social Link (bundle) of entity Paragraph
 * from JSON:API and returns an adapted object (clean up useless properties)
 * of type ParagraphSocialLink.
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
 * This adapter receives an object of Paragraph Skill Link (bundle) of entity Paragraph
 * from JSON:API and returns an adapted object (clean up useless properties)
 * of type ParagraphSkillLink.
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
