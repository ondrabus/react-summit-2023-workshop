import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.10.0'
 *
 * Aircraft
 * Id: 8cbe7938-cfab-4de4-8b90-12fd03870d5a
 * Codename: aircraft
 */
export type AircraftModel = IContentItem<{
  /**
   * ID (text)
   * Required: false
   * Id: c60c290c-ed59-4e80-8661-5e1116f19d1e
   * Codename: id
   */
  id: Elements.TextElement;

  /**
   * Type (multiple_choice)
   * Required: false
   * Id: ba496f66-2f98-4300-8e4d-1528e4a3c688
   * Codename: type
   */
  type: Elements.MultipleChoiceElement;
}>;
