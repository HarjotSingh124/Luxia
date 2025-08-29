'use client';
export default function Footer() {
  return (
    <footer className="bg-black/80 mt-12 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <h4 className="font-heading text-2xl text-yellow-100">LUXIA</h4>
          <p className="mt-3 text-sm max-w-xs text-yellow-100">Crafted for comfort & style — premium rugs and interiors for discerning homes.</p>
        </div>

        <div className="flex gap-12">
          <div>
            <h5 className="font-medium text-sm text-yellow-100">Quick Links</h5>
            <ul className="mt-3 text-sm space-y-2">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h5 className="font-medium text-sm text-yellow-100">Contact</h5>
            <p className="mt-3 text-sm">hello@luxia.com</p>
            <p className="mt-1 text-sm">+91 90000 00000</p>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-t-gray-800 pt-6">
        <div className="max-w-7xl mx-auto px-6 text-sm text-gray-400">© {new Date().getFullYear()} Luxia Rugs. All rights reserved.</div>
      </div>
    </footer>
  );
}