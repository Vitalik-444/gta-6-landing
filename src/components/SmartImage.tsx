import { memo, useState } from 'react'

interface Props {
  src: string
  alt: string
  className?: string
  eager?: boolean
}

const officialImages: Record<string, string> = {
  'hero.jpg': 'https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_01.0naeahss9-1x6.jpg',
  'about-1.jpg': 'https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_07.0ca326xbl~oyh.jpg',
  'about-2.jpg': 'https://www.rockstargames.com/VI/_next/static/media/Lucia_Caminos_07.0.c7un8ro7_p2.jpg',
  'countdown.jpg': 'https://www.rockstargames.com/VI/_next/static/media/Vice_City_10.0f1q-xa_4q8r2.jpg',
  'jason.jpg': 'https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_07.0ca326xbl~oyh.jpg',
  'lucia.jpg': 'https://www.rockstargames.com/VI/_next/static/media/Lucia_Caminos_07.0.c7un8ro7_p2.jpg',
  'cal.jpg': 'https://www.rockstargames.com/VI/_next/static/media/Cal_Hampton_01.0xlil231_osh4.jpg',
  'boobie.jpg': 'https://www.rockstargames.com/VI/_next/static/media/Boobie_Ike_01.0-wji2pg5anfs.jpg',
  'priest.jpg': 'https://www.rockstargames.com/VI/_next/static/media/DreQuan_Priest_01.0_0~wi-ipdj35.jpg',
  'dimez.jpg': 'https://www.rockstargames.com/VI/_next/static/media/Real_Dimez_01.0djwwboo8-glx.jpg',
  'raul.jpg': 'https://www.rockstargames.com/VI/_next/static/media/Raul_Bautista_01.0md1ii-yrn96r.jpg',
  'brian.jpg': 'https://www.rockstargames.com/VI/_next/static/media/Brian_Heder_01.0r.ute88os9k-.jpg',
  'vice-city.jpg': 'https://www.rockstargames.com/VI/_next/static/media/Vice_City_10.0f1q-xa_4q8r2.jpg',
  'leonida-keys.jpg': 'https://www.rockstargames.com/VI/_next/static/media/Leonida_Keys_06.0eapr3hbeyewx.jpg',
  'port-gellhorn.jpg': 'https://www.rockstargames.com/VI/_next/static/media/Port_Gellhorn_06.13ghhmb440r6e.jpg',
  'ambrosia.jpg': 'https://www.rockstargames.com/VI/_next/static/media/Ambrosia_06.0j9c7-8nfb_xf.jpg',
  'grassrivers.jpg': 'https://www.rockstargames.com/VI/_next/static/media/Grassrivers_05.0.dx9~67tljry.jpg',
  'mount-kalaga.jpg': 'https://www.rockstargames.com/VI/_next/static/media/Mount_Kalaga_National_Park_01.0v5fl0f83hjv_.jpg',
  'vehicles.jpg': 'https://www.rockstargames.com/VI/_next/static/media/Mount_Kalaga_National_Park_01.0v5fl0f83hjv_.jpg',
  'wildlife.jpg': 'https://www.rockstargames.com/VI/_next/static/media/Grassrivers_05.0.dx9~67tljry.jpg',
  'beaches.jpg': 'https://www.rockstargames.com/VI/_next/static/media/Leonida_Keys_06.0eapr3hbeyewx.jpg',
  'nightlife.jpg': 'https://www.rockstargames.com/VI/_next/static/media/Vice_City_10.0f1q-xa_4q8r2.jpg',
  'underworld.jpg': 'https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_01.0naeahss9-1x6.jpg',
  'culture.jpg': 'https://www.rockstargames.com/VI/_next/static/media/Real_Dimez_01.0djwwboo8-glx.jpg',
  'launch.jpg': 'https://www.rockstargames.com/VI/_next/static/media/GTAVI_Launch_Trailer_poster.0_q-sdrgufc.s.jpg',
  'extended.jpg': 'https://www.rockstargames.com/VI/_next/static/media/GTAVI_An_Extended_Look_poster.0ijbsha5fo1te.jpg',
}

const galleryImages = [
  'Jason_and_Lucia_01.0naeahss9-1x6.jpg', 'Jason_Duval_07.0ca326xbl~oyh.jpg',
  'Lucia_Caminos_07.0.c7un8ro7_p2.jpg', 'Vice_City_10.0f1q-xa_4q8r2.jpg',
  'Leonida_Keys_06.0eapr3hbeyewx.jpg', 'Port_Gellhorn_06.13ghhmb440r6e.jpg',
  'Grassrivers_05.0.dx9~67tljry.jpg', 'Ambrosia_06.0j9c7-8nfb_xf.jpg',
  'Cal_Hampton_01.0xlil231_osh4.jpg', 'Boobie_Ike_01.0-wji2pg5anfs.jpg',
  'DreQuan_Priest_01.0_0~wi-ipdj35.jpg', 'Real_Dimez_01.0djwwboo8-glx.jpg',
  'Raul_Bautista_01.0md1ii-yrn96r.jpg', 'Brian_Heder_01.0r.ute88os9k-.jpg',
  'Mount_Kalaga_National_Park_01.0v5fl0f83hjv_.jpg', 'Vice_City_10.0f1q-xa_4q8r2.jpg',
  'Jason_and_Lucia_01.0naeahss9-1x6.jpg', 'Grassrivers_05.0.dx9~67tljry.jpg',
]

function resolveImage(src: string) {
  const filename = src.split('/').pop() ?? src
  const galleryMatch = filename.match(/^gta6-(\d+)\.jpg$/)
  if (galleryMatch) {
    const index = (Number(galleryMatch[1]) - 1) % galleryImages.length
    return `https://www.rockstargames.com/VI/_next/static/media/${galleryImages[index]}`
  }
  return officialImages[filename] ?? src
}

function SmartImage({ src, alt, className = '', eager = false }: Props) {
  const [failed, setFailed] = useState(false)
  const imageSrc = resolveImage(src)
  if (failed) {
    return (
      <div role="img" aria-label={alt} className={`${className} flex items-end bg-gradient-to-br from-neon via-pink to-sunset p-3`}>
        <span className="font-accent text-[10px] uppercase tracking-widest text-night/80">{alt}</span>
      </div>
    )
  }
  return <img src={imageSrc} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setFailed(true)} className={className} />
}

export default memo(SmartImage)
