# Lattisework Strategic Research

## Competitive Landscape

### Direct Competitors

| Name | What it does | Strengths | Gaps |
|------|--------------|-----------|------|
| **Midlibrary.io** | Visual library of 4,000+ SREF codes and 5,500+ artistic styles for Midjourney | Largest style library; embedded parameters (--stylize, --ar, --seed); version-specific (V6.1, niji) | No educational framing; purely lookup-based; no vocabulary learning |
| **MidjourneySref.com** | 1,485 SREF codes with 5,940 prompts across V7, V6, niji | Video examples; multi-version support; prompt tools | Style codes only; no broader visual vocabulary |
| **PromptHero** | Search millions of prompts across Midjourney, SD, DALL-E, Sora | Multi-model; free platform; categorized browsing (Anime, Architecture, etc.) | Prompt discovery only; no learning context; overwhelming quantity |
| **Lexica** | 5M+ Stable Diffusion images with prompts; sophisticated filtering | Massive scale; search by style/color/subject; can generate on-site | Paid only; SD-focused; no taxonomy or learning structure |
| **PromptBase** | Marketplace for 210K+ curated prompts ($2-$10 each) | Curated quality; commercial focus | Transactional; no educational value; fragmented discovery |
| **GitHub MJ Reference** | Open-source keywords/styles reference with comparison pages | Free; comprehensive; community-maintained | Technical documentation format; not visually explorable |
| **Lewis C. Lin Cheatsheet** | 5-category prompt building framework (Photography, Aesthetics, etc.) | Systematic approach; covers key building blocks | Static; no visuals; doesn't show what terms produce |

### Adjacent Resources

| Name | Type | Why users go there | What's missing |
|------|------|-------------------|----------------|
| **Cosmos** | Visual discovery/moodboarding | AI auto-tags content; visual search; "new Pinterest for creatives"; 100K+ users | No prompt vocabulary; inspiration without application; general design focus |
| **Are.na** | Collaborative research platform | Ad-free; independent; "playlists for ideas"; 18K+ premium subscribers | Requires manual curation; no AI-specific structure; limited to 200 blocks (free) |
| **Pinterest** | Visual bookmarking | Ubiquitous; massive library; familiar UX | Flooded with "AI slop"; users leaving; banned AI search terms (now lifted); mislabeling issues |
| **Discord communities** | Real-time collaboration | Live feedback; prompt battles; office hours; early feature access | Chaotic; hard to search; knowledge buried in chat history; no persistence |
| **YouTube tutorials** | Video education | Visual demonstrations; personality-driven learning | Time-consuming; hard to reference; scattered across creators |
| **Twitter/X threads** | Viral prompt sharing | Trendy techniques; influencer curation | Ephemeral; algorithm-dependent; no organization; requires following right people |
| **Savee** | Design-focused moodboard | Editorial aesthetic; design community | Images only (no text/links); paid tiers for unlimited; niche audience |
| **Visual Electric** | Designer-focused AI gen | Canvas interface (like Figma); 60+ preset styles; 40 free daily generations | Tool, not learning; style presets but no vocabulary education |
| **Krea AI** | Real-time AI creative suite | 50+ style references; Art Director feature; 10M+ prompt dataset (open) | Generation-focused; educational aspect limited to dataset exploration |

---

## Positioning Map

```
                        EDUCATIONAL (Learn vocabulary)
                                    ↑
                                    │
                                    │     ★ LATTISEWORK
                                    │     (Hierarchical taxonomy +
                                    │      Visual examples +
                                    │      Educational descriptions)
                                    │
    FRAGMENTED ←────────────────────┼────────────────────→ SYSTEMATIC
    (Scattered prompts)             │                      (Organized taxonomy)
                                    │
         Pinterest   PromptHero     │     Midlibrary
         Twitter/X   Lexica         │     SREF sites
         Discord                    │     GitHub refs
                                    │
                                    │
                                    ↓
                        LOOKUP-ONLY (Find codes/prompts)
```

**X-axis:** Fragmented ←→ Systematic (how organized is the content structure?)
**Y-axis:** Lookup-only ←→ Educational (does it teach vocabulary or just provide codes?)

**Where Lattisework sits:**
Upper-right quadrant — systematic AND educational. Combines hierarchical taxonomy (meta-sections → categories → terms) with visual examples and explanatory descriptions. No current competitor occupies this space.

**White space opportunities:**
1. **Taxonomy-based learning** — No competitor offers structured, hierarchical navigation from concepts (FRAME, LIGHT, STYLE) down to specific terms
2. **Visual + Educational pairing** — Existing tools show images OR teach vocabulary, rarely both simultaneously
3. **Cross-generator applicability** — Most tools are Midjourney-specific; vocabulary concepts (chiaroscuro, volumetric lighting, golden hour) work across all generators
4. **Progressive skill development** — No competitor addresses the "0-50 easy, 50-100 hard" learning curve with structured progression

---

## Pain Points (Validated)

### What power users struggle with

1. **The vocabulary barrier** — "The difference between an amateur and a pro isn't creativity — it's vocabulary." Professional artists with art history knowledge get better results than casual users who struggle to articulate visual intent.

2. **Unpredictable results** — Users feel "very out of control" even after learning basics. The 0-50 learning curve is easy (2 days), but 50-100 mastery requires specific terminology most people don't know.

3. **Knowledge fragmentation** — Prompt knowledge scattered across Discord chats, Twitter threads, YouTube videos, and multiple databases. No single source of truth. Power users build personal Notion templates to manage this chaos.

4. **Model-specific volatility** — Learned patterns don't generalize; seemingly insignificant prompt changes produce dramatically different results. Skills gained on one model version may not transfer.

5. **Style articulation gap** — "If you're not an art history major, you'll likely lack the vocabulary to articulate what you love about a visual style." Reverse engineering with /describe helps but doesn't build lasting knowledge.

### Workarounds they've built

1. **Notion prompt libraries** — Power users maintain personal databases with 200+ prompts, tags, ratings, and version history. Templates like "Midjourney Prompts Generator" let users organize influences and save best prompts.

2. **Image-to-prompt reverse engineering** — Tools like CLIP Interrogator, PromptPerfect, and Deep Dream Generator's Image to Prompt help users extract vocabulary from images they admire.

3. **SREF code hoarding** — Users collect and share style reference codes (1.4B+ exist in MJ v6.1) as shortcuts to bypass vocabulary learning entirely.

4. **Community curation** — Following specific Twitter/X creators (like @HenryETaylor for styles) and Discord channels (Prompt Craft) to crowdsource discovery.

5. **Physical/analog notes** — Some creators sketch on paper and use metaprompting with ChatGPT to develop unique styles, then document what works.

### Quotes / Evidence

> "Anyone who's spent time with Midjourney, DALL-E, or Stable Diffusion knows the prompt engineering grind. You need the right adjectives, the correct artistic references, specific technical terms for lighting and composition."

> "The barrier to entry is real. Professional artists fluent in art history terminology get better results than casual users who struggle to articulate what they want. The gap between vision and execution depends entirely on verbal precision."

> "While crowd engagement with AI-driven art generation shows promise, there is a noticeable gap in the effective use of prompt engineering. This raises the question of whether prompt engineering is an intuitive skill that can be easily acquired or if it requires more specialized training and understanding." — *International Journal of Human-Computer Interaction*

> "People who know 'the language of art' can now speak art into existence." — *The Art of Education*

> "The vast majority of the work of prompt engineering is just being a student of history and literature."

---

## Strategic Directions

### Option A: The Visual Vocabulary Academy
**What it means:**
Position Lattisework as the definitive educational resource for visual prompting vocabulary. Expand the taxonomy to cover photography, lighting, art movements, materials, and composition comprehensively. Add learning paths that progress from beginner concepts to advanced terminology.

**Tradeoffs:**
- Pro: Defensible position; competitors focus on lookup, not learning. Builds lasting user value and potential for courses/premium content. Addresses the validated vocabulary gap directly.
- Con: Slower user growth (education requires commitment). Harder to monetize initially. Requires continuous content development.

**Effort level:** Medium-High (content creation intensive; requires ongoing curation and expansion)

---

### Option B: The Cross-Platform Prompt Translator
**What it means:**
Expand beyond Midjourney to show how the same visual vocabulary applies across Krea, Stable Diffusion, DALL-E, Leonardo, and emerging generators. Become the Rosetta Stone for AI image generation — teaching transferable concepts rather than tool-specific codes.

**Tradeoffs:**
- Pro: Larger addressable market. Reduces user fear of tool lock-in. Aligns with trend toward multi-model workflows. Unique positioning (competitors are model-specific).
- Con: More complex testing/validation. Image examples need regeneration across platforms. Risk of diluting focus. Some vocabulary differences exist between models.

**Effort level:** High (requires maintaining examples across multiple platforms; ongoing model updates)

---

### Option C: The Community-Curated Living Reference
**What it means:**
Open Lattisework to community contributions. Let users submit terms, examples, and techniques. Add upvoting, collections, and user profiles. Become the "Are.na for AI vocabulary" — curated quality with community scale.

**Tradeoffs:**
- Pro: Scales content without proportional effort. Network effects drive growth. Community builds investment/loyalty. Addresses discovery of new terms organically.
- Con: Quality control challenges (moderation burden). Risk of noise overwhelming signal. Shifts product identity. Requires significant platform development.

**Effort level:** High (requires user accounts, moderation systems, contribution workflows, community management)

---

## Signals to Watch

| Direction | Signal that it's working | How to test |
|-----------|-------------------------|-------------|
| **Option A: Visual Vocabulary Academy** | Users return repeatedly to explore new terms; progression from basic to advanced; users reference Lattisework when helping others on Discord | Track return visitor rate; survey on learning outcomes; monitor brand mentions in MJ communities |
| **Option B: Cross-Platform Translator** | Traffic from non-Midjourney searches; users comparing vocabulary across tools; coverage in AI art tutorials as cross-platform resource | Search console data for Krea/SD/DALL-E terms; referral diversity; creator partnerships |
| **Option C: Community-Curated Reference** | User contribution rate; quality of submissions; organic sharing; community-generated terms appearing before official coverage | Submission velocity; approval rate; viral coefficient; community NPS |

**Leading indicators to validate direction:**
- Which pages have highest time-on-page? (education value)
- What search terms bring users? (vocabulary learning vs. code lookup)
- Where do users share Lattisework links? (Discord educational threads vs. quick reference)
- Do users explore beyond initial landing? (taxonomy navigation depth)

---

## Raw Notes

### Sources reviewed
- [Midlibrary.io](https://midlibrary.io/) — Leading SREF/styles library
- [MidjourneySref.com](https://midjourneysref.com/) — SREF codes database
- [PromptHero](https://prompthero.com/) — Multi-model prompt search
- [Lexica](https://lexica.art/) — Stable Diffusion image/prompt database
- [Cosmos](https://www.cosmos.so/) — Visual discovery app
- [Are.na](https://www.are.na/) — Collaborative research platform
- [Visual Electric](https://www.krea.ai/articles/visual-electric-vs-krea) — Designer-focused AI generation
- [Krea AI](https://www.krea.ai/) — Real-time AI creative suite
- [Lewis C. Lin Cheatsheet](https://www.lewis-lin.com/blog/the-ultimate-prompting-cheat-sheet-for-ai-image-creation)
- [GitHub MJ Styles Reference](https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference)
- [International Journal of Human-Computer Interaction — Prompting AI Art](https://www.tandfonline.com/doi/full/10.1080/10447318.2024.2431761)
- [Midjourney Official Documentation](https://docs.midjourney.com/)
- [Notion Prompt Organization Templates](https://www.notion.com/templates/prompt-organizer)

### Surprising findings
- **1.4 billion SREF codes exist** in Midjourney v6.1 alone — users are drowning in options without vocabulary to navigate them
- **Pinterest banned AI search terms** in 2023 (now lifted) and added "AI slop" filters in 2025 — mainstream platforms struggling with AI content flood
- **The 0-50-100 learning curve** is well-documented: basics in 2 days, but mastery requires art history knowledge most users lack
- **"Personalization" is now mandatory** in Midjourney V7 — users must rate 200 images before accessing latest model, indicating shift toward learned preferences over text prompts
- **No competitor combines taxonomy + education** — this is a genuine white space, not just a positioning claim
- **Google offers "Prompting Essentials"** course — indicates mainstream recognition that prompt literacy is a teachable skill

### Questions that emerged
- Should Lattisework eventually include user-generated examples, or maintain curated-only quality?
- How do style reference codes (--sref) interact with vocabulary-based prompting? Complementary or competing?
- Is there an opportunity in "prompt translation" between generators (Midjourney vocabulary → Krea equivalents)?
- Could Lattisework integrate with /describe to help users build vocabulary from images they admire?
- What's the right balance between comprehensiveness (more terms) and usability (curated essentials)?
- Should categories expand to cover video generation vocabulary as Sora/Runway mature?

