export const WHATSAPP_NUMERO = '525545601020';

export const whatsappUrl = (texto: string) =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;

export const WHATSAPP_INFO = whatsappUrl('Hola Redonix, quiero información');
export const WHATSAPP_COTIZA = whatsappUrl('Hola Redonix, quiero cotizar un proyecto');

export const contacto = {
  telefono: '55-4560-1020',
  email: 'redonix.ent@gmail.com',
};

export const redes = [
  { nombre: 'Instagram', usuario: '@redonix_ent', url: 'https://instagram.com/redonix_ent', icono: 'instagram' },
  { nombre: 'TikTok', usuario: '@redonix_ent', url: 'https://tiktok.com/@redonix_ent', icono: 'tiktok' },
  { nombre: 'Facebook', usuario: 'Redonix Entertainment', url: 'https://www.facebook.com/search/top?q=Redonix%20Entertainment', icono: 'facebook' },
] as const;

export const navegacion = [
  { texto: 'Nosotros', href: '#nosotros' },
  { texto: 'Equipo', href: '#equipo' },
  { texto: 'Servicios', href: '#servicios' },
  { texto: 'Alianzas', href: '#alianzas' },
  { texto: 'Contacto', href: '#contacto' },
] as const;
