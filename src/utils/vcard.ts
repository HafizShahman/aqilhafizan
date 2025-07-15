interface VCardData {
  name: string;
  title: string;
  email: string;
  phone?: string;
  website?: string;
  linkedin?: string;
  github?: string;
  organization?: string;
  location?: string;
  tiktok?: string;
}

export function generateVCard(data: VCardData): string {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${data.name}`,
    `N:${data.name.split(' ').reverse().join(';')}`,
    `TITLE:${data.title}`,
    `EMAIL:${data.email}`,
    ...(data.phone ? [`TEL:${data.phone}`] : []),
    ...(data.website ? [`URL:${data.website}`] : []),
    ...(data.organization ? [`ORG:${data.organization}`] : []),
    ...(data.location ? [`ADR:;;${data.location};;;;`] : []),
    ...(data.linkedin ? [`URL;type=LinkedIn:${data.linkedin}`] : []),
    ...(data.github ? [`URL;type=GitHub:${data.github}`] : []),
    ...(data.tiktok ? [`URL;type=GitHub:${data.tiktok}`] : []),
    'END:VCARD'
  ].join('\n');

  return vcard;
}

export function downloadVCard(data: VCardData): void {
  const vcardContent = generateVCard(data);
  const blob = new Blob([vcardContent], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `${data.name.replace(/\s+/g, '_')}.vcf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}