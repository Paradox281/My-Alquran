export async function fetchSurahs(page = 1, limit = 20) {
    const start = (page - 1) * limit
    const end = start + limit
    const response = await fetch("https://quran-api.santrikoding.com/api/surah")
    if (!response.ok) {
      throw new Error("Failed to fetch surahs")
    }
    const allSurahs = await response.json()
    return {
      surahs: allSurahs.slice(start, end),
      totalPages: Math.ceil(allSurahs.length / limit),
    }
  }
  
  export async function fetchSurahDetails(number: string) {
    const response = await fetch(`https://quran-api.santrikoding.com/api/surah/${number}`)
    if (!response.ok) {
      throw new Error("Failed to fetch surah details")
    }
    const data = await response.json()
  
    // Fetch audio for the entire surah
    const audioResponse = await fetch(`https://api.quran.com/api/v4/chapter_recitations/1/${number}`)
    if (audioResponse.ok) {
      const audioData = await audioResponse.json()
      data.audioUrl = audioData.audio_file.audio_url
    }
  
    return data
  }
  
  