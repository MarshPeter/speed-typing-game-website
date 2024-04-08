class PromptStatsCalculator {
  calculateWordsPerMinute(startTime: number, wordsComplete: number) : number {
    const currentTime = performance.now();
    const timeDifference = currentTime - startTime;
    const timeDifferenceInMinutes = timeDifference / (1000 * 60);
    const currentWordsPerMinute = (wordsComplete / timeDifferenceInMinutes);

    return currentWordsPerMinute;
  }
}

export default new PromptStatsCalculator;