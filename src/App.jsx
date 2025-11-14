import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Star, Check, Camera, Heart, Crown, MapPin, Smartphone, Instagram, PhoneCall } from 'lucide-react'

const waNumber = '6285851674021'
const waText = encodeURIComponent('Halo kak, saya ingin booking MUA di Sidoarjo 💋')
const waUrl = `https://wa.me/${waNumber}?text=${waText}`

export default function App() {
  useEffect(() => {
    // Add a subtle scroll animation class on mount
    document.documentElement.classList.add('scroll-smooth')
  }, [])

  return (
    <div id="home" className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/70 border-b border-pink-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-pink-600">
            <Sparkles className="h-6 w-6" />
            <span>MUA Sidoarjo</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="hover:text-pink-600">Layanan</a>
            <a href="#portfolio" className="hover:text-pink-600">Galeri</a>
            <a href="#testimonials" className="hover:text-pink-600">Testimoni</a>
            <a href="#pricing" className="hover:text-pink-600">Paket</a>
            <a href="#contact" className="hover:text-pink-600">Kontak</a>
          </nav>
          <a href={waUrl} target="_blank" className="hidden md:inline-flex items-center rounded-full bg-pink-600 text-white px-4 py-2 font-medium shadow hover:bg-pink-500 transition-colors">
            Booking WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-24 md:pt-28">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1596461404969-9ae70d8793a5?q=80&w=1600&auto=format&fit=crop"
            alt="Makeup artist in action"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center py-10 md:py-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Tampil Memesona untuk Momen Berharga di Sidoarjo
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Jasa Make Up Artist profesional untuk akad, resepsi, wisuda, prewedding, photoshoot, hingga acara spesial lainnya. Riasan flawless, tahan lama, dan cocok untuk semua jenis kulit.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href={waUrl} target="_blank" className="inline-flex items-center justify-center gap-2 rounded-full bg-pink-600 text-white px-6 py-3 font-semibold shadow-lg hover:bg-pink-500">
                  <PhoneCall className="h-5 w-5" /> Pesan Sekarang
                </a>
                <a href="#portfolio" className="inline-flex items-center justify-center gap-2 rounded-full border border-pink-300 text-pink-700 px-6 py-3 font-semibold bg-white/70 hover:bg-pink-50">
                  <Camera className="h-5 w-5" /> Lihat Galeri
                </a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
                <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-yellow-500" /> 4.9/5 rating</span>
                <span className="inline-flex items-center gap-2"><Crown className="h-4 w-4 text-pink-500" /> 500+ klien puas</span>
                <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-500" /> Sidoarjo & sekitarnya</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop"
                  alt="Hasil riasan elegan"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/20 via-transparent to-transparent" />
              </div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="absolute -bottom-6 -left-6 hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop"
                  alt="Alat makeup"
                  className="w-48 h-48 rounded-2xl object-cover shadow-xl ring-1 ring-black/5"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white to-pink-50/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center">
            Layanan Unggulan
          </motion.h2>
          <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
            Pilihan riasan sesuai kebutuhanmu, hasil natural sampai glam, nyaman dipakai seharian.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Heart, title: 'Wedding & Akad', desc: 'Rias flawless dan tahan lama, termasuk hijab & paes.' },
              { icon: Camera, title: 'Prewedding & Photoshoot', desc: 'Konsep makeup sesuai tema agar hasil foto maksimal.' },
              { icon: Crown, title: 'Wisuda & Pesta', desc: 'Tampil standout untuk momen spesialmu.' },
              { icon: Smartphone, title: 'Makeup On-Call', desc: 'Datang ke lokasi Sidoarjo & sekitarnya.' },
            ].map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="h-12 w-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-colors">
                  {s.icon && <s.icon className="h-6 w-6" />}
                </div>
                <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{s.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-700"><Check className="h-4 w-4 text-emerald-500" /> Konsultasi gratis</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center">
            Galeri Karya
          </motion.h2>
          <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
            Beberapa hasil riasan klien kami. Hover untuk detail.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'https://images.unsplash.com/photo-1558222217-8e1d39f8d8f6?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1515468381879-40d0ded81016?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1604881987921-2e4b24541fde?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1596464716121-e24a9650130a?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1200&auto=format&fit=crop',
            ].map((src, i) => (
              <motion.div key={src} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group relative overflow-hidden rounded-2xl shadow ring-1 ring-black/5">
                <img src={src} alt={`Portofolio rias ke-${i + 1}`} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-2 text-sm"><Heart className="h-4 w-4 text-pink-400" /> Look #{i + 1}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-pink-50/50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center">
            Apa Kata Mereka
          </motion.h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { name: 'Ayu', text: 'Makeup-nya halus, tahan lama, dan fotogenic banget. Aku puas banget untuk hari wisudaku!' },
              { name: 'Dina', text: 'MUA-nya ramah dan detail. Hasil akadku super flawless dan tidak crack sama sekali.' },
              { name: 'Rani', text: 'Booking mudah, datang tepat waktu, hasil sesuai request. Highly recommended!' },
            ].map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center font-bold">{t.name[0]}</div>
                  <div className="font-semibold">{t.name}</div>
                </div>
                <p className="mt-3 text-gray-700">“{t.text}”</p>
                <div className="mt-3 flex text-yellow-500"><Star className="h-5 w-5" /><Star className="h-5 w-5" /><Star className="h-5 w-5" /><Star className="h-5 w-5" /><Star className="h-5 w-5" /></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center">
            Paket Riasan
          </motion.h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { name: 'Basic', price: '350K', features: ['Makeup natural', 'Bulu mata', 'Free retouch 1x'] },
              { name: 'Glam', price: '600K', features: ['Makeup glam', 'Hairdo sederhana', 'Softlens (opsional)'] },
              { name: 'Bridal', price: '1.8JT', features: ['Rias akad/resepsi', 'Hijab & aksesori', 'Trial makeup'] },
            ].map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className={`rounded-2xl p-6 shadow-sm ring-1 ring-gray-100 bg-white ${i === 1 ? 'border-2 border-pink-500 shadow-pink-100' : ''}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  {i === 1 && <span className="text-xs px-2 py-1 rounded-full bg-pink-100 text-pink-700">Favorit</span>}
                </div>
                <div className="mt-2 text-4xl font-extrabold text-pink-600">{p.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> {f}</li>
                  ))}
                </ul>
                <a href={waUrl} target="_blank" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-pink-600 text-white py-3 font-semibold hover:bg-pink-500">Pesan Paket</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Map */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white to-pink-50/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold">
                Lokasi & Kontak
              </motion.h2>
              <p className="mt-3 text-gray-600">Berdomisili di Sidoarjo, melayani home service ke area Sidoarjo, Surabaya, dan sekitarnya.</p>
              <div className="mt-6 space-y-3 text-gray-700">
                <div className="flex items-center gap-3"><MapPin className="text-pink-600" /> Sidoarjo, Jawa Timur</div>
                <a href={waUrl} target="_blank" className="flex items-center gap-3 hover:text-pink-600"><Smartphone className="text-pink-600" /> {`+62 ${waNumber.slice(2,5)}-${waNumber.slice(5,9)}-${waNumber.slice(9)}`}</a>
                <a href="https://instagram.com" target="_blank" className="flex items-center gap-3 hover:text-pink-600"><Instagram className="text-pink-600" /> @mua.sidoarjo</a>
              </div>
              <a href={waUrl} target="_blank" className="mt-6 inline-flex items-center gap-2 rounded-full bg-pink-600 text-white px-6 py-3 font-semibold shadow hover:bg-pink-500">
                Chat via WhatsApp
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow ring-1 ring-black/5">
              <div className="aspect-[16/10] w-full">
                <iframe
                  title="Lokasi MUA Sidoarjo"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126766.58805032719!2d112.6083682!3d-7.4552962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd8026f4f6f5a13%3A0x4027a76e3530b20!2sSidoarjo%2C%20Sidoarjo%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} MUA Sidoarjo. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#services" className="hover:text-pink-600">Layanan</a>
            <a href="#portfolio" className="hover:text-pink-600">Galeri</a>
            <a href="#pricing" className="hover:text-pink-600">Paket</a>
            <a href={waUrl} target="_blank" className="text-pink-600 font-semibold">Booking</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a href={waUrl} target="_blank" className="fixed bottom-5 right-5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-lg p-4 z-50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6 fill-current"><path d="M380.9 97.1C339 55.1 283.2 32 224.8 32 103.5 32 4 131.5 4 252.9c0 43.7 11.4 86.3 33.1 123.7L0 480l106.4-36.6c35.8 19.6 76.1 29.9 118.4 29.9h.1c121.3 0 220.8-99.5 220.8-220.9 0-58.4-23.1-113.2-64.8-155.3zM224.9 438.6h-.1c-37.2 0-73.6-10-105.3-28.9l-7.5-4.5-63.1 21.7 21-61.6-4.9-7.9C45.1 326.1 34 290 34 252.9 34 149.6 121.6 62 224.8 62c57.3 0 111.2 22.3 151.7 62.8 40.5 40.6 62.8 94.6 62.7 152-.1 118.2-96.6 214.6-214.3 214.6zm121.1-160.5c-6.6-3.3-39.1-19.3-45.2-21.5-6.1-2.2-10.6-3.3-15.1 3.3-4.4 6.6-17.3 21.5-21.2 25.9-3.9 4.4-7.8 5-14.4 1.7-39-19.5-64.5-34.8-90.2-79-6.8-11.7 6.8-10.9 19.5-36.2 2.2-4.4 1.1-8.3-.6-11.6-1.7-3.3-15.1-36.4-20.7-49.9-5.5-13.3-11.1-11.5-15.1-11.7-3.9-.2-8.3-.2-12.8-.2s-11.6 1.7-17.7 8.3c-6.1 6.6-23.4 22.9-23.4 55.9s24 64.8 27.3 69.3c3.3 4.4 47.2 72 114.1 100.9 42.3 18.3 58.8 29.4 80.6 37.7 8.4 3.3 26.6 1.1 30.4-12.1 3.9-13.2 12.7-31.2 15.7-37.8 3.9-6.6 2.2-10.9-4.4-14.2z"/></svg>
      </a>
    </div>
  )
}
