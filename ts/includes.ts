export async function loadHTML(selector: string, filePath: string): Promise<void> {
  const element = document.querySelector<HTMLElement>(selector);
  if (!element) {
    console.error(`loadHTML: No element found for selector ${selector}.`);
    return;
  }

  try {
    const response = await fetch(filePath);
    if (!response.ok) {
        throw new Error(`Failed to load ${filePath} (${response.status})`);
    }

    element.innerHTML = await response.text();
  } catch (err) {
    console.error(err);
  }
}