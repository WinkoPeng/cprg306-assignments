import ItemList from './item-list.js'

export default function Page() {
    return (
      <main className="bg-slate-950">
        <h2 class="text-3xl text-white font-bold m-2">Shopping List</h2>
            <ul>
                <ItemList />
            </ul>

      </main>
    );
  }