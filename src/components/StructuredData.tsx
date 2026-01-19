import { terms } from '../data/terms'

export function StructuredData() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Lattisework',
    url: 'https://lattisework.com',
    description: 'A visual glossary for Midjourney prompting. Learn terms like bokeh, caustics, Art Deco, and more through curated image examples.',
  }

  const definedTermSetSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Midjourney Visual Glossary',
    description: 'A collection of visual prompting terms for Midjourney AI image generation',
    hasDefinedTerm: terms.map((term) => ({
      '@type': 'DefinedTerm',
      name: term.label,
      description: term.description,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }}
      />
    </>
  )
}
