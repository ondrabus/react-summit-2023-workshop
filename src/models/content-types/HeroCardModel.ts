import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.10.0'
 *
 * Hero Card
 * Id: d309e071-8a63-4567-86ac-5d3263a2ad6f
 * Codename: hero_card
 */
export type HeroCardModel = IContentItem<{
  /**
   * Text (rich_text)
   * Required: false
   * Id: b77a7912-be70-4873-8ac1-e6329d3ad852
   * Codename: text
   */
  text: Elements.RichTextElement;

  /**
   * Title (text)
   * Required: false
   * Id: f3e81353-6eb5-4ae7-975a-3fe342eceacd
   * Codename: title
   */
  title: Elements.TextElement;
}>;
