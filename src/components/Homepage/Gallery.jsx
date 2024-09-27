import Image from "next/image";
const Gallery = () => {
  return (
    <>
      <div>
        <div className="min-w-5xl mx-auto">
          <div className="space-y-5">
            <div>
              <h1 className="text-7xl font-semibold text-center bg-gradient-to-r from-[#60aef8] via-[#f46692] to-[#f3a562] bg-clip-text text-transparent">
                Keyboard Gallery
              </h1>
            </div>
            <section className="my-10">
              <div className="grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                <img
                  src="https://images.unsplash.com/photo-1695176476724-7f83313a8533?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5Y2FwfGVufDB8fDB8fHww"
                  alt=""
                  className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
                />
                <img
                  alt=""
                  className="w-full h-full rounded shadow-sm min-h-48 object-cover dark:bg-gray-500 aspect-square"
                  src="https://images.unsplash.com/photo-1702834000621-76c4a9d15868?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <img
                  alt=""
                  className="w-full h-full rounded shadow-sm object-cover min-h-48 dark:bg-gray-500 aspect-square"
                  src="https://images.unsplash.com/photo-1708196162164-91b879f99f90?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <img
                  alt=""
                  className="w-full h-full rounded object-cover shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                  src="https://images.unsplash.com/photo-1708196071134-dfb341db74ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtleWNhcHxlbnwwfHwwfHx8MA%3D%3D"
                />
                <img
                  alt=""
                  className="w-full object-cover h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                  src="https://images.unsplash.com/photo-1628518482149-c8c56b636f4f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
