import { adaptedFieldLink } from "@/adapters";
import { JsonApiTerm, JsonApiTermCompany, Term, TermCompany } from "@/models";

/**
 * This adapter receives an object of TaxonomyTerm entity from JSON:API
 * and returns an adapted object (clean up useless properties)
 * of type Term. The correct bundle of the node will determinate by
 * the property type (term.type)
 *
 * @param {JsonApiTerm} n
 * @return {Term}
 */
export const adaptedTermByType = (n: JsonApiTerm): Term => {
  switch (n.type) {
    case "taxonomy_term--companies":
      return adaptedTermCompany(n as JsonApiTermCompany) as TermCompany;
  }
};

/**
 * This adapter receives an object of TaxonomyTerm entity from JSON:API
 * and returns an adapted object (clean up useless properties)
 * of type TermCompany.
 *
 * @param {JsonApiTermCompany} t
 * @return {TermCompany}
 */
export const adaptedTermCompany = (t: JsonApiTermCompany): TermCompany => ({
  id: t.id,
  type: t.type,
  name: t.name,
  description: t.description,
  link: adaptedFieldLink(t.field_link),
  langCode: t.langcode,
});
