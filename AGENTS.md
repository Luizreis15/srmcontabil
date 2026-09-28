# Project decisions

- Keep Roda de Conversa editions and specialist profiles in `src/data/roda/` and derive current/past views from edition dates; this keeps hub, archive, and edition pages synchronized without a second content source.
- Use the uploaded invitation through a Lovable asset pointer and an absolute public URL for displayed CDN media; the local Vite preview does not proxy asset-pointer paths, while the public media URL renders in both preview and production.
- Transition the October 1 event to the archive at the start of October 2 in São Paulo time; the invitation states a start time but no end time, so do not invent a specific event duration.
