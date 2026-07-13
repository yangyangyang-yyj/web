export function mergeKnowledge(lessons, knowledgeMap) {
  return lessons.map((lesson) => ({
    ...lesson,
    knowledge: knowledgeMap[lesson.id] ?? lesson.knowledge,
  }))
}
