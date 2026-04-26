// Hardcoded blessing shown on the finale screen.
// Use {name} as a placeholder for the guest's name.
export const blessingTemplate = `Dear {name},

You made it to the end of Bar & Itay's quest.
Thank you for crossing the sea (and a few riddles)
to celebrate love on this Cypriot shore.

May your laughter be loud,
your heart be soft,
and your memory of this night last forever.

— With love,
Bar & Itay`;

export function renderBlessing(name) {
  return blessingTemplate.replace(/\{name\}/g, name || 'friend');
}
