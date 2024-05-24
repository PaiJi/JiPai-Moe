import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { IoIosClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { NavConfig } from "@src/consts";

export default function MobileTab() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <nav className="fixed lg:hidden top-0 left-0 py-2 px-6 shadow bg-white w-full flex justify-between z-10">
        <a href="/" className="font-bold text-xl text-primary-blue">
          JiPa<span className="text-red-400">i</span> Store
        </a>
        <button onClick={() => setMobileMenuOpen(true)} className="">
          <IoMenu className="text-3xl text-primary-blue" />
        </button>
      </nav>

      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <IoIosClose className="text-4xl" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {NavConfig.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 text-slate-600 text-base block align-baseline hover:text-primary-blue px-3 py-2"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
