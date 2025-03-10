export async function loadSnippet(
  category: string,
  algorithmId: string,
  language: string
) {
  try {
    const response = await fetch(
      `/src/snippets/${category}/${algorithmId}/${algorithmId}.${language}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch snippet: ${response.statusText}`);
    }

    let text = await response.text();
    text = text.replace(/\/\/# sourceMappingURL=.*$/gm, "");

    return text;
  } catch (error) {
    console.error(`Failed to load implementation: ${error}`);
    return "// Failed to load implementation";
  }
}
