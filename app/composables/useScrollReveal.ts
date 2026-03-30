export function useScrollReveal(selectorOrThreshold: string | number = '.reveal', threshold = 0.2) {
  const selector = typeof selectorOrThreshold === 'number'
    ? '.reveal'
    : selectorOrThreshold

  if (typeof selectorOrThreshold === 'number') {
    threshold = selectorOrThreshold
  }

  const container = useTemplateRef<HTMLElement>('revealContainer')
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const root = container.value || document
    const elements = root.querySelectorAll(selector)

    if (elements.length === 0) return

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle('show', entry.isIntersecting)
        }
      },
      { threshold },
    )

    elements.forEach((el) => observer!.observe(el))
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })
}
