import { fetchSurahDetails } from "@/app/utils/api"
import Link from "next/link"

export default async function SurahDetail({ params }: { params: { number: string } }) {
  const surah = await fetchSurahDetails(params.number)

  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/" className="text-green-600 hover:underline mb-6 inline-block">
        &larr; Back to all Surahs
      </Link>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-green-600 text-white p-6">
          <h2 className="text-3xl font-bold">
            {surah.nama_latin} ({surah.nama})
          </h2>
          <p className="text-xl mt-2">{surah.arti}</p>
        </div>
        <div className="p-6">
          <p className="text-gray-600">Number of verses: {surah.jumlah_ayat}</p>
          <p className="text-gray-600">Revelation: {surah.tempat_turun}</p>
          {surah.audioUrl && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Listen to the entire Surah:</h3>
              <audio controls className="w-full">
                <source src={surah.audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
        </div>
      </div>
      <div className="space-y-8">
        {surah.ayat.map((ayat: any) => (
          <div key={ayat.nomor} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                {ayat.nomor}
              </span>
              {ayat.audio && ayat.audio["01"] && (
                <audio controls className="w-64">
                  <source src={ayat.audio["01"]} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>
            <p className="text-right text-3xl mb-4 leading-loose arabic-text">{ayat.ar}</p>
            <p className="text-gray-600">{ayat.idn}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

