export default function Dashboard() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-900">Your Projects</h2>
        <button className="inline-flex items-center px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition">New Project</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-medium text-slate-900">Coffee Landing</h3>
                <p className="mt-1 text-sm text-slate-600">Generated from “cozy cafe” prompt</p>
              </div>
              <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700">Published</span>
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
              <span>Updated 2d ago</span>
              <span>•</span>
              <span>12 sections</span>
            </div>
          </div>
          <div className="border-t border-slate-200 p-3 flex items-center justify-end gap-2">
            <button className="px-3 py-2 rounded-md text-slate-700 hover:bg-slate-100 transition">Preview</button>
            <button className="px-3 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition">Open</button>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-medium text-slate-900">Portfolio Dark</h3>
                <p className="mt-1 text-sm text-slate-600">“Modern photographer portfolio”</p>
              </div>
              <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">Draft</span>
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
              <span>Updated 6h ago</span>
              <span>•</span>
              <span>8 sections</span>
            </div>
          </div>
          <div className="border-t border-slate-200 p-3 flex items-center justify-end gap-2">
            <button className="px-3 py-2 rounded-md text-slate-700 hover:bg-slate-100 transition">Preview</button>
            <button className="px-3 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition">Open</button>
          </div>
        </div>
      </div>
    </section>
  )
}
