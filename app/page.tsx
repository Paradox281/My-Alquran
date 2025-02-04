import Link from "next/link"
import { fetchSurahs } from "@/app/utils/api"

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string }
}) {
  const currentPage = Number(searchParams.page) || 1
  const { surahs, totalPages } = await fetchSurahs(currentPage)

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {surahs.map((surah: any) => (
          <Link href={`/surah/${surah.nomor}`} key={surah.nomor} className="block">
            <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-green-600 text-white p-4">
                <h2 className="text-2xl font-bold">{surah.nama_latin}</h2>
                <p className="text-sm opacity-75">{surah.nama}</p>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-2">{surah.arti}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Surah ke-{surah.nomor}</span>
                  <span>{surah.jumlah_ayat} ayat</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center space-x-2">
        {currentPage > 1 && (
          <Link
            href={`/?page=${currentPage - 1}`}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Previous
          </Link>
        )}
        <span className="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        {currentPage < totalPages && (
          <Link
            href={`/?page=${currentPage + 1}`}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Next
          </Link>
        )}
      </div>
    </div>
  )
}

