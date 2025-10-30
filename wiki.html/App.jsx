import React, {useState} from 'react'
import concepts from '../concepts.json'

export default function App(){
  const [cur, setCur] = useState(concepts[0] || null)
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Wiki Jurídica (React)</h1>
          <div className="text-sm text-gray-600">Scaffold con Tailwind</div>
        </header>
        <div className="grid grid-cols-4 gap-6">
          <nav className="col-span-1 bg-white p-4 rounded shadow">
            {concepts.map(c=>(
              <button key={c.id} className="w-full text-left p-2 rounded hover:bg-gray-50" onClick={()=>setCur(c)}>
                <div className="font-semibold">{c.title}</div>
                <div className="text-xs text-gray-500">{c.cat}</div>
              </button>
            ))}
          </nav>
          <main className="col-span-3 bg-white p-6 rounded shadow">
            {cur ? (
              <>
                <h2 className="text-xl font-bold">{cur.title}</h2>
                <div className="text-sm text-gray-500 mb-4">Categoría: {cur.cat}</div>
                <div dangerouslySetInnerHTML={{__html: cur.body}} />
              </>
            ) : <div>No hay concepto seleccionado</div>}
          </main>
        </div>
      </div>
    </div>
  )
}
